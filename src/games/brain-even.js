import readlineSync from 'readline-sync';
import { iter } from '..';

const brainEven = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".\n');
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}!\n`);
  return iter(name, 2);
};
export default brainEven;
