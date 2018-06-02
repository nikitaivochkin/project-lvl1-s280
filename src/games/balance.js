import { cons } from 'hexlet-pairs';
import { generateNumber } from '../functions';
import startGame from '../controlOfGames';

const generatorDataForStartGame = () => {
  const end = 9;
  const start = 0;
  const bigNum = (num, counter) => {
    const str = String(num);
    const result = '';
    let i = 0;
    while (i < str.length) {
      if (Number(str[i]) === counter) {
        return i;
      }
      i += 1;
    }
    if (result === '') {
      return bigNum(num, counter - 1);
    }
    return result;
  };

  const smallNum = (num, counter) => {
    const str = String(num);
    const result = '';
    let i = 0;
    while (i < str.length) {
      if (Number(str[i]) === counter) {
        return i;
      }
      i += 1;
    }
    if (result === '') {
      return smallNum(num, counter + 1);
    }
    return result;
  };

  const count = 0;
  const isBallance = (num, counter) => {
    const str = String(num);
    for (let i = 1; i < str.length; i += 1) {
      if ((Number(str[counter]) - Number(str[i]) < -1) ||
       (Number(str[counter]) - Number(str[i]) > 1)) {
        return false;
      }
    }
    if (true && counter === str.length - 1) {
      return true;
    } return isBallance(num, counter + 1);
  };

  const ballance = (num) => {
    const str = String(num);
    const theBiggest = Number(bigNum(num, end));
    const theSmallest = Number(smallNum(num, start));
    const difference = str[theSmallest] - str[theBiggest];
    let result = '';
    if (isBallance(num, count) || difference === 0) {
      return String(num);
    }
    for (let i = 0; i < str.length; i += 1) {
      if (i !== theSmallest && i !== theBiggest) {
        result += str[i];
      }
    }
    return ballance(`${Number(str[theSmallest]) + 1}${Number(str[theBiggest]) - 1}${result}`);
  };

  const sort = (num) => {
    const theBiggest = bigNum(num, end);
    const theSmallest = smallNum(num, start);
    let resultSmall = '';
    let resultBig = '';
    let i = 0;
    while (i < num.length) {
      if (num[i] === num[theSmallest]) {
        resultSmall += num[theSmallest];
      } else if (num[i] === num[theBiggest]) {
        resultBig += num[theBiggest];
      }
      i += 1;
    }
    return `${resultSmall}${resultBig}`;
  };

  const randomNum = generateNumber(9999, 100);
  const rightAnswer = sort(ballance(randomNum));
  return cons(randomNum, rightAnswer);
};


const task = 'Balance the given number.';

const brainBalance = () => startGame(generatorDataForStartGame, task);

export default brainBalance;
