import { getRandomInt, commonGameLogic } from '../index';

const minIndex = (digits) => {
  let index = 0;
  digits.forEach((d, i) => {
    if (d < digits[index]) index = i;
  });
  return index;
};

const maxIndex = (digits) => {
  let index = 0;
  digits.forEach((d, i) => {
    if (d > digits[index]) index = i;
  });
  return index;
};

const isBalanced = (digits) => {
  const min = digits[minIndex(digits)];
  const max = digits[maxIndex(digits)];
  return (max - min) <= 1;
};

const balanceNumber = (num) => {
  const digits = String(num).split('').map(c => Number(c));
  while (!isBalanced(digits)) {
    const max = maxIndex(digits);
    const min = minIndex(digits);
    digits[max] -= 1;
    digits[min] += 1;
  }
  return digits.sort().map(d => String(d)).join('');
};

const balanceLogic = () => {
  const number = getRandomInt(100, 9999);
  const question = `${number}`;
  const answer = balanceNumber(number);
  return [question, answer];
};

const balanceGame = () => {
  commonGameLogic('Balance the given number.', balanceLogic);
};

export default balanceGame;
