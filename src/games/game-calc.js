import { commonGameLogic, getRandomInt } from '../index';

const ops = {
  '+': (num1, num2) => num1 + num2,
  '-': (num1, num2) => num1 - num2,
  '*': (num1, num2) => num1 * num2,
};

const calcLogic = () => {
  const firstNum = getRandomInt(1, 99);
  const secondNum = getRandomInt(1, 99);
  const opNames = Object.keys(ops);
  const op = opNames[getRandomInt(0, opNames.length - 1)];
  const question = `${firstNum} ${op} ${secondNum}`;
  const opFunction = ops[op];
  const answer = opFunction(firstNum, secondNum);
  return [question, answer];
};

const calcGame = () => {
  commonGameLogic('What is the result of the expression?', calcLogic);
};

export default calcGame;
