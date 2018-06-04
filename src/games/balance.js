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
  let l = str.length;
  let x = 0;
  let y = 0;
  let resultX = '';
  let resultY = '';
  const integer = sumDigits(num) / l;
  if (isInteger(integer)) {
    while (l > 0) {
      resultX += integer;
      l -= 1;
    }
    return resultX;
  }
  const a = (Math.ceil(sumDigits(num) / l) - 1);
  const b = (Math.ceil(sumDigits(num) / l));
  while (x < l) {
    if ((a * x) + (b * y) === sumDigits(num) && x + y === l) {
      while (x > 0) {
        resultX += a;
        x -= 1;
      }
      while (y > 0) {
        resultY += b;
        y -= 1;
      }
      return `${resultX}${resultY}`;
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

