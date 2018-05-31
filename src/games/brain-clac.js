import readlineSync from 'readline-sync';
import { cons, car, cdr } from 'hexlet-pairs';
import { generateNumber, generateNumber2 } from '../functions';

const getQuestions = (a, b, counter) => {
  if (counter === 2) {
    return cons((`${a} + ${b}`), String(a + b));
  } else if (counter === 1) {
    return cons((`${a} - ${b}`), String(a - b));
  } return cons((`${a} * ${b}`), String(a * b));
};

const iter = (name, counter) => {
  const randomNum = generateNumber(100, 1);
  const randomNum2 = generateNumber2(100, 1);
  console.log(`Question: ${car(getQuestions(randomNum, randomNum2, counter))}`);
  const rightAnswer = cdr(getQuestions(randomNum, randomNum2, counter));
  const usersAnswer = readlineSync.question('Your answer: ');
  if (counter === 0 && rightAnswer === usersAnswer) {
    console.log('Correct!');
    return console.log(`Congratulations, ${name}!`);
  } else if (rightAnswer === usersAnswer) {
    console.log('Correct!');
    return iter(name, counter - 1);
  }
  console.log(`'${usersAnswer}' is wrong answer ;(.Correct answer was '${rightAnswer}'.`);
  return console.log(`Let's try again, ${name}!`);
};

const brainClac = () => {
  console.log('Welcome to the Brain Games!');
  console.log('What is the result of the expression?\n');
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}!\n`);
  const counter = 2;
  return iter(name, counter);
};
export default brainClac;
