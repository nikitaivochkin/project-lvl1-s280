import { cons } from 'hexlet-pairs';
import generateNumber from '../utils';
import startGame from '../controlOfGames';

const isEvenAnswer = num => (num % 2 === 0);

const generatorDataForStartGame = () => {
  const question = String(generateNumber(100, 1));
  const rightAnswer = isEvenAnswer(question) ? 'yes' : 'no';
  return cons(question, rightAnswer);
};

const task = 'Answer "yes" if number even otherwise answer "no".';

export default () => startGame(generatorDataForStartGame, task);

