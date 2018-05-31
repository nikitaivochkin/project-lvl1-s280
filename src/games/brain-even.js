import readlineSync from 'readline-sync';
import { generateNumber, isEvenAnswer } from '../functions';
import { result, game } from '../controlOfGames';

export const idOfFunc = 'even';
const task = 'Answer "yes" if number even otherwise answer "no".\n';

export const brainEvenIter = (name, counter) => {
  const question = generateNumber(100, 1);
  const rightAnswer = isEvenAnswer(question) ? 'yes' : 'no';

  console.log(`Question: ${question}`);
  const usersAnswer = readlineSync.question('Your answer: ');
  return result(rightAnswer, usersAnswer, idOfFunc, name, counter);
};
const counter = 2;
const brainEven = () => game(task, idOfFunc, counter);

export default brainEven;
