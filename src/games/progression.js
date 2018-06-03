import { cons } from 'hexlet-pairs';
import generateNumber from '../utils';
import startGame from '../controlOfGames';

const task = 'What number is missing in this progression?';

const generatorDataForStartGame = () => {
  const step = generateNumber(9, 1);
  const empty = generateNumber(10, 1);
  const progression = () => {
    const length = 11;
    let result = '';
    for (let i = 0; i < length; i += 1) {
      result = (i === empty) ? `${result} ..` : `${result} ${i * step}`;
    }
    return result;
  };

  const question = progression();
  const rightAnswer = String(step * empty);
  return cons(question, rightAnswer);
};

const brainProgression = () => startGame(generatorDataForStartGame, task);

export default brainProgression;
