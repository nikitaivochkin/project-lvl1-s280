const controlOfGames = (rightAnswer, usersAnswer, counter) => {
  if (counter === 0 && rightAnswer === usersAnswer) {
    return 'stop';
  } else if (rightAnswer === usersAnswer) {
    return 'Correct!';
  }
  return 'wrong';
};

export default controlOfGames;
