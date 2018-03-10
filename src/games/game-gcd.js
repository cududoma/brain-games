import { getRandomInt, commonGameLogic } from '../index';

const gcd = (firstTermExp, secondTermExp) => {
  let a = firstTermExp;
  let b = secondTermExp;
  while (a !== 0 && b !== 0) {
    if (a > b) {
      a %= b;
    } else {
      b %= a;
    }
  }
  return a + b;
};

const gcdLogic = () => {
  const firstTermExp = getRandomInt(1, 99);
  const secondTermExp = getRandomInt(1, 99);
  const question = `${firstTermExp} ${secondTermExp}`;
  const answer = gcd(firstTermExp, secondTermExp);
  return [question, answer];
};

const gcdGame = () => {
  commonGameLogic('Find the greatest common divisor of given numbers', gcdLogic);
};

export default gcdGame;
