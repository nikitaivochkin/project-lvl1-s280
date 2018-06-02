import { cons } from 'hexlet-pairs';
import generateNumber from '../utils';
import startGame from '../controlOfGames';

const isPrime = (num) => {
  let result = 2;
  if (num === 1 || num < 1) {
    return false;
  }
  for (let counter = 1; num % result !== 0; counter) {
    result += counter;
  }
  if (result === num) {
    return true;
  }
  return false;
};

const generatorDataForStartGame = () => {
  const question = generateNumber(200, 1);
  const rightAnswer = isPrime(question) ? 'yes' : 'no';
  return cons(question, rightAnswer);
};

const task = 'Answer "yes" if number is prime otherwise answer "no".';

const brainEven = () => startGame(generatorDataForStartGame, task);

export default brainEven;
