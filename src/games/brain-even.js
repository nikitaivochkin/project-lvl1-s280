import readlineSync from 'readline-sync';
import { iter } from '..';

const brainEven = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".');
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}!`);
  return iter(name, 2);
};
export default brainEven;
