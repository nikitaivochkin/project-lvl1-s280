import readlineSync from 'readline-sync';
import { generateNumber, isEvenAnswer } from '../functions';
import controlOfGames from '../controlOfGames';

const brainEven = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".\n');
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}!\n`);

  const iter = (counter) => {
    const question = generateNumber(100, 1);
    const rightAnswer = isEvenAnswer(question) ? 'yes' : 'no';

    console.log(`Question: ${question}`);
    const usersAnswer = readlineSync.question('Your answer: ');

    if (controlOfGames(rightAnswer, usersAnswer, counter) === 'stop') {
      console.log('Correct!');
      return console.log(`Congratulations, ${name}!`);
    } else if (controlOfGames(rightAnswer, usersAnswer, counter) === 'Correct!') {
      console.log('Correct!');
      return iter(counter - 1);
    } else if (controlOfGames(rightAnswer, usersAnswer, counter) === 'wrong') {
      console.log(`'${usersAnswer}' is wrong answer ;(.Correct answer was '${rightAnswer}'.`);
      return console.log(`Let's try again, ${name}!`);
    }
    return iter(counter);
  };
  return iter(2);
};
export default brainEven;
