import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const counter = 3;

const iter = (gameData, counterOfIter) => {
  if (counterOfIter === 0) {
    return 'stop';
  }
  const questionAndRightAnswer = gameData();
  const question = car(questionAndRightAnswer);
  const rightAnswer = cdr(questionAndRightAnswer);
  console.log(`Question: ${question}!`);
  const usersAnswer = readlineSync.question('Your answer: ');

  if (rightAnswer === usersAnswer) {
    console.log('Correct!');
    return iter(gameData, counterOfIter - 1);
  } console.log(`'${usersAnswer}' is wrong answer ;(.Correct answer was '${rightAnswer}'.`);
  return 'wrong';
};

const startGame = (gameData, task) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${task}\n`);
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}!\n`);
  const result = iter(gameData, counter);
  const answerToUser = (result === 'wrong') ? console.log(`Let's try again, ${name}!`) : console.log(`Congratulations, ${name}!`);
  return answerToUser;
};

export default startGame;
