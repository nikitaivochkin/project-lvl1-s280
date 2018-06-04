import { cons } from 'hexlet-pairs';
import generateNumber from '../utils';
import startGame from '../controlOfGames';

const isInteger = num => ((Math.ceil(num)) - num === 0);

const sumDigits = (num) => {
  const str = String(num);
  let result = 0;
  for (let i = 0; i < str.length; i += 1) {
    result += Number(str[i]);
  }
  return result;
};

const balance = (num) => {
  const str = String(num);
  const l = str.length;
  let x = 0;
  let y = 0;
  const integer = sumDigits(num) / l;
  if (isInteger(integer)) {
    return `${integer}`.repeat(l);
  }
  const maxNum = (Math.ceil(sumDigits(num) / l));
  const minNum = maxNum - 1;
  while (x < l) {
    if ((minNum * x) + (maxNum * y) === sumDigits(num) && x + y === l) {
      return `${minNum}`.repeat(x) + `${maxNum}`.repeat(y);
    }
    y += 1;
    if (y === l) {
      y = 0;
      x += 1;
    }
  }
  return balance(num);
};

const generatorDataForStartGame = () => {
  const randomNum = generateNumber(9999, 100);
  const rightAnswer = balance(randomNum);
  return cons(randomNum, rightAnswer);
};


const task = 'Balance the given number.';

export default () => startGame(generatorDataForStartGame, task);

