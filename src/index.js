import readlineSync from 'readline-sync';

const questionOfName = () => {
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}!`);
  return name;
};

const goodAnswer = 'Correct!';
const bedAnswerYes = "'yes' is wrong answer ;(. Correct answer was 'no'";
const bedAnswerNo = "'no' is wrong answer ;(. Correct answer was 'yes'";
const LetsTry = `Let's try again, ${9}!`;

const questionOfNunber = () => {
  const randomNumber = Math.round(Math.random() * ((101 - 1) + 1));
  console.log(`Question: ${randomNumber}!`);
  const answer = (`${readlineSync.question('Your answer: ')}`);

  if (randomNumber % 2 === 0 && answer === 'yes') {
    return console.log(goodAnswer);
  } else if (randomNumber % 2 !== 0 && answer === 'yes') {
    return 'stopYes';
  } else if (randomNumber % 2 && answer === 'no') {
    return console.log(goodAnswer);
  } else if (randomNumber % 2 === 0 && answer === 'no') {
    return 'stopNo';
  } else if (answer !== 'yes' || 'no') {
    return 'Uncorrect answer!';
  }
};

const game = (f, n) => {
  if (n === 0 || f === goodAnswer) {
    return console.log('Congratulations, Sam!');
  } else if (f === 'stopYes') {
    return console.log(`${bedAnswerYes}
${LetsTry}`);
  } else if (f === 'stopNo') {
    return console.log(`${bedAnswerNo}
${LetsTry}`);
  } else if (f === 'Uncorrect answer!') {
    return console.log(`${'Uncorrect answer!'}
${LetsTry}`);
  } return game(questionOfNunber(), n - 1);
};

export { questionOfName, questionOfNunber, game };
