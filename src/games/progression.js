import { cons } from 'hexlet-pairs';
import generateNumber from '../functions';
import startGame from '../controlOfGames';

const task = 'What number is missing in this progression?';

const generatorDataForStartGame = () => {
  const step = generateNumber(9, 1);
  const randomEmpty = generateNumber(10, 1);
  const progression = () => {
    const length = 11;
    let result = '';
    for (let i = 0; i < length; i += 1) {
      if (i === randomEmpty === true) {
        result = `${result} ..`;
      } else {
        result = `${result} ${i * step}`;
      }
    }
    return result;
  };

  const question = progression();
  const rightAnswer = String(step * randomEmpty);
  return cons(question, rightAnswer);
};

const brainProgression = () => startGame(generatorDataForStartGame, task);

export default brainProgression;
