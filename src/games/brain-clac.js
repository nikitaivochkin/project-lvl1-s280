import readlineSync from 'readline-sync';
import { generateNumber, generateNumber2 } from '../functions';

const iter = (name, counter) => {
  const randomNum = generateNumber(100, 1);
  const randomNum2 = generateNumber2(100, 1);
  const question = `${randomNum} + ${randomNum2}`;
  console.log(`Question: ${question}`);
  const rightAnswer = String(randomNum + randomNum2);
  const usersAnswer = readlineSync.question('Your answer: ');
  if (counter === 0 && rightAnswer === usersAnswer) {
    console.log('Correct!');
    return console.log(`Congratulations, ${name}!`);
  } else if (rightAnswer === usersAnswer) {
    console.log('Correct!');
    return iter(name, counter - 1);
  } else if (rightAnswer !== usersAnswer) {
    console.log(`'${usersAnswer}' is wrong answer ;(.Correct answer was '${rightAnswer}'.`);
    return console.log(`Let's try again, ${name}!`);
  }
  return iter(name, 2);
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
