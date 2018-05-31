import readlineSync from 'readline-sync';
import { cons, car, cdr } from 'hexlet-pairs';
import { generateNumber } from '../functions';
import { result, game } from '../controlOfGames';

export const idOfFunc = 'clac';
const task = 'What is the result of the expression?\n';

const getQuestions = (a, b, counter) => {
  if (counter === 2) {
    return cons((`${a} + ${b}`), String(a + b));
  } else if (counter === 1) {
    return cons((`${a} - ${b}`), String(a - b));
  } return cons((`${a} * ${b}`), String(a * b));
};

export const brainClacIter = (name, counter) => {
  const randomNum = generateNumber(100, 1);
  const randomNum2 = generateNumber(100, 1);

  const question = car(getQuestions(randomNum, randomNum2, counter));
  const rightAnswer = cdr(getQuestions(randomNum, randomNum2, counter));

  console.log(`Question: ${question}`);
  const usersAnswer = readlineSync.question('Your answer: ');
  return result(rightAnswer, usersAnswer, idOfFunc, name, counter);
};
const counter = 2;
const brainClac = () => game(task, idOfFunc, counter);

export default brainClac;
