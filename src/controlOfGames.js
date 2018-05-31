import readlineSync from 'readline-sync';
import { brainEvenIter } from '../src/games/brain-even';
import { brainClacIter } from '../src/games/brain-clac';

const identifier = (idOfFunc, name, counter) => {
  if (idOfFunc === 'even') {
    return brainEvenIter(name, counter);
  } return brainClacIter(name, counter);
};

const controlOfGames = (rightAnswer, usersAnswer, counter) => {
  if (counter === 0 && rightAnswer === usersAnswer) {
    return 'stop';
  } else if (rightAnswer === usersAnswer) {
    return 'Correct!';
  }
  return 'wrong';
};

export const game = (task, id, counter) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${task}`);
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}!\n`);
  return identifier(id, name, counter);
};

export const result = (rightAnswer, usersAnswer, id, name, counter) => {
  if (controlOfGames(rightAnswer, usersAnswer, counter) === 'stop') {
    console.log('Correct!');
    return console.log(`Congratulations, ${name}!`);
  } else if (controlOfGames(rightAnswer, usersAnswer, counter) === 'Correct!') {
    console.log(counter);
    console.log('Correct!');
    return identifier(id, name, counter - 1);
  } else if (controlOfGames(rightAnswer, usersAnswer, counter) === 'wrong') {
    console.log(`'${usersAnswer}' is wrong answer ;(.Correct answer was '${rightAnswer}'.`);
    return console.log(`Let's try again, ${name}!`);
  }
  return identifier(id, name, counter);
};

