import readlineSync from 'readline-sync';
import { generateNumber } from '../functions';
import { result, game } from '../controlOfGames';

const biggestDivisor = (x, y) => {
  const iter = (counter, acc, acc2) => {
    if (acc === 1 || acc2 === 1) {
      return acc || acc2;
    }
    if ((acc % counter) === 0 && (acc2 % counter) === 0) {
      return counter;
    }
    return iter(counter - 1, acc, acc2);
  };
  return iter(x, x, y);
};

export const idOfFunc = 'gcd';
const task = 'Find the greatest common divisor of given numbers.\n';

export const brainGcdIter = (name, counter) => {
  const randomNum = generateNumber(100, 1);
  const randomNum2 = generateNumber(100, 1);
  const question = `${randomNum} ${randomNum2}`;
  const rightAnswer = String(biggestDivisor(randomNum, randomNum2));

  console.log(`Question: ${question}`);
  const usersAnswer = readlineSync.question('Your answer: ');
  return result(rightAnswer, usersAnswer, idOfFunc, name, counter);
};
const counter = 2;
const brainGcd = () => game(task, idOfFunc, counter);

export default brainGcd;
