const generateNumber = (max, min) => Math.round(Math.random() * (max - min)) + min;
const isEvenAnswer = num => (num % 2 === 0);

export { generateNumber, isEvenAnswer };
