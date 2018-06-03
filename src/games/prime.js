import { cons } from 'hexlet-pairs';
import generateNumber from '../utils';
import startGame from '../controlOfGames';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const generatorDataForStartGame = () => {
  const question = generateNumber(200, 1);
  const rightAnswer = isPrime(question) ? 'yes' : 'no';
  return cons(question, rightAnswer);
};

const task = 'Answer "yes" if number is prime otherwise answer "no".';

export default () => startGame(generatorDataForStartGame, task);
