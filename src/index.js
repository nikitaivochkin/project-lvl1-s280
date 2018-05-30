import readlineSync from 'readline-sync';

const questionOfName = () => {
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}!
  `);
  return name;
};

const questionOfNunber = (name, counter) => {
  const randomNumber = Math.round(Math.random() * ((101 - 1) + 1));
  console.log(`Question: ${randomNumber}!`);
  const answer = (`${readlineSync.question('Your answer: ')}`);

  if (counter === 0) {
    return console.log(`Correct!
Congratulations, ${name}!`);
  } else if ((randomNumber % 2 === 0 && answer === 'yes') || (randomNumber % 2 && answer === 'no')) {
    console.log('Correct!');
    return questionOfNunber(name, counter - 1);
  } else if ((randomNumber % 2) && (answer === 'yes' || answer !== 'no')) {
    return console.log(`'${answer}' is wrong answer ; (.Correct answer was 'no'.
Let's try again, ${name}!`);
  } else if ((randomNumber % 2 === 0) && (answer === 'no' || answer !== 'yes')) {
    return console.log(`'${answer}' is wrong answer ; (.Correct answer was 'yes'.
Let's try again, ${name}!`);
  }
};
export { questionOfName, questionOfNunber };
