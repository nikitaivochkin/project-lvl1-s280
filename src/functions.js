const generateNumber = (max, min) => Math.round(Math.random() * (max - min)) + min;
const generateNumber2 = generateNumber;
const isEvenAnswer = num => (num % 2 === 0);

export { generateNumber, generateNumber2, isEvenAnswer };
