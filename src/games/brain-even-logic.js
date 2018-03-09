import { getRandomInt, commonGameLogic } from '../index';

const checkEven = num => (num % 2 === 0 ? 'yes' : 'no');

const evenLogic = () => {
  const randomInt = getRandomInt(1, 99);
  const question = `${randomInt}`;
  const answer = checkEven(randomInt);
  return [question, answer];
};

const evenGame = () => {
  commonGameLogic('Answer "yes" if number even otherwise answer "no".', evenLogic);
};

export default evenGame;
