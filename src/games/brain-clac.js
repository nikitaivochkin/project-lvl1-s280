import readlineSync from 'readline-sync';
import { cons, car, cdr } from 'hexlet-pairs';
import { generateNumber, generateNumber2 } from '../functions';
import controlOfGames from '../controlOfGames';

const getQuestions = (a, b, counter) => {
  if (counter === 2) {
    return cons((`${a} + ${b}`), String(a + b));
  } else if (counter === 1) {
    return cons((`${a} - ${b}`), String(a - b));
  } return cons((`${a} * ${b}`), String(a * b));
};

const brainClac = () => {
  console.log('Welcome to the Brain Games!');
  console.log('What is the result of the expression?\n');
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}!\n`);

  const iter = (counter) => {
    const randomNum = generateNumber(100, 1);
    const randomNum2 = generateNumber2(100, 1);

    const question = car(getQuestions(randomNum, randomNum2, counter));
    const rightAnswer = cdr(getQuestions(randomNum, randomNum2, counter));

    console.log(`Question: ${question}`);
    const usersAnswer = readlineSync.question('Your answer: ');

    if (controlOfGames(rightAnswer, usersAnswer, counter) === 'stop') {
      console.log('Correct!');
      return console.log(`Congratulations, ${name}!`);
    } else if (controlOfGames(rightAnswer, usersAnswer, counter) === 'Correct!') {
      console.log('Correct!');
      return iter(counter - 1);
    } else if (controlOfGames(rightAnswer, usersAnswer, counter) === 'wrong') {
      console.log(`'${usersAnswer}' is wrong answer ;(.Correct answer was '${rightAnswer}'.`);
      return console.log(`Let's try again, ${name}!`);
    }
    return iter(counter);
  };
  return iter(2);
};
export default brainClac;
