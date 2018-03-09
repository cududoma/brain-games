import { commonGameLogic, getRandomInt } from '../index';

const calcLogic = (step) => {
  switch (step) {
    case 1: {
      const firstTerm = getRandomInt(1, 99);
      const secondTerm = getRandomInt(1, 99);
      console.log(`Question: ${firstTerm} + ${secondTerm}`);
      return firstTerm + secondTerm;
    }
    case 2: {
      const firstTerm = getRandomInt(1, 99);
      const secondTerm = getRandomInt(1, 99);
      console.log(`Question: ${firstTerm} - ${secondTerm}`);
      return firstTerm - secondTerm;
    }
    case 3: {
      const firstTerm = getRandomInt(1, 99);
      const secondTerm = getRandomInt(1, 99);
      console.log(`Question: ${firstTerm} * ${secondTerm}`);
      return firstTerm * secondTerm;
    }
    default:
      throw Error(`Wrong step number ${step}.`);
  }
};

const calcGame = () => {
  commonGameLogic('What is the result of the expression?', calcLogic);
};

export default calcGame;
