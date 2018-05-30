import readlineSync from 'readline-sync';
import { generateNumber, isEvenAnswer } from '../functions';

const brainEven = () => {
  console.log(`${'Welcome to the Brain Games'}!`);
  console.log(`${'Answer "yes" if number even otherwise answer "no".'}`);
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}!`);

  const iter = (answer, counter) => {
    const question = generateNumber(100, 1);
    console.log(`Question: ${question}!`);
    const rightAnswer = isEvenAnswer(question) ? 'yes' : 'no';
    const answerOfUser = readlineSync.question('Your answer: ');
    console.log(rightAnswer, answerOfUser);
    if (counter === 0 && rightAnswer === answerOfUser) {
      console.log('Correct!');
      return console.log(`Congratulations, ${name}!`);
    } else if (rightAnswer === answerOfUser) {
      console.log(counter);
      console.log('Correct!');
      return iter(answerOfUser, counter - 1);
    } else if (rightAnswer !== answerOfUser) {
      console.log(`'${answerOfUser}' is wrong answer ;(.Correct answer was '${rightAnswer}'.`);
      return console.log(`Let's try again, ${name}!`);
    }
    return iter(answerOfUser, 2);
  };
  return iter(name, 2);
};
export default brainEven;
