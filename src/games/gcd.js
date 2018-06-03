import { cons } from 'hexlet-pairs';
import generateNumber from '../utils';
import startGame from '../controlOfGames';

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

const task = 'Find the greatest common divisor of given numbers.';

const generatorDataForStartGame = () => {
  const randomNum = generateNumber(100, 1);
  const randomNum2 = generateNumber(100, 1);
  const question = `${randomNum} ${randomNum2}`;
  const rightAnswer = String(biggestDivisor(randomNum, randomNum2));
  return cons(question, rightAnswer);
};

export default () => startGame(generatorDataForStartGame, task);
