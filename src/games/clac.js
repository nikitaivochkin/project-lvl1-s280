import { cons } from 'hexlet-pairs';
import { generateNumber } from '../functions';
import startGame from '../controlOfGames';

const generatorDataForStartGame = (counter) => {
  const getQuestions = (num1, num2, counterOfGame) => {
    if (counterOfGame === 2) {
      return cons((`${num1} + ${num2}`), String(num1 + num2));
    } else if (counterOfGame === 1) {
      return cons((`${num1} - ${num2}`), String(num1 - num2));
    } return cons((`${num1} * ${num2}`), String(num1 * num2));
  };
  const randomNum = generateNumber(100, 1);
  const randomNum2 = generateNumber(100, 1);
  return getQuestions(randomNum, randomNum2, counter - 1);
};

const task = 'What is the result of the expression?';

const brainClac = () => startGame(generatorDataForStartGame, task);

export default brainClac;
