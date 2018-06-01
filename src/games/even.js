import { cons } from 'hexlet-pairs';
import { generateNumber, isEvenAnswer } from '../functions';
import startGame from '../controlOfGames';

const generatorDataForStartGame = () => {
  const question = String(generateNumber(100, 1));
  const rightAnswer = isEvenAnswer(question) ? 'yes' : 'no';
  return cons(question, rightAnswer);
};

const task = 'Answer "yes" if number even otherwise answer "no".';

const brainEven = () => startGame(generatorDataForStartGame, task);

export default brainEven;
