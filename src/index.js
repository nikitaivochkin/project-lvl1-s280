import readlineSync from 'readline-sync';
import { generateNumber, isEvenAnswer } from './functions';

const questionName = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}!`);
  return name;
};
export default questionName;

export const iter = (name, counter) => {
  const question = generateNumber(100, 1);
  console.log(`Question: ${question}!`);
  const rightAnswer = isEvenAnswer(question) ? 'yes' : 'no';
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
