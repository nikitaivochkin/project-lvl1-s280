import { cons } from 'hexlet-pairs';
import generateNumber from '../utils';
import startGame from '../controlOfGames';

const generatorDataForStartGame = () => {
  const getQuestions = (num1, num2) => {
    switch (generateNumber(1, 3)) {
      case 1:
        return cons((`${num1} + ${num2}`), String(num1 + num2));
      case 2:
        return cons((`${num1} - ${num2}`), String(num1 - num2));
      default:
        return cons((`${num1} * ${num2}`), String(num1 * num2));
    }
  };
  const randomNum = generateNumber(100, 1);
  const randomNum2 = generateNumber(100, 1);
  return getQuestions(randomNum, randomNum2);
};

const task = 'What is the result of the expression?';

const brainClac = () => startGame(generatorDataForStartGame, task);

export default brainClac;
