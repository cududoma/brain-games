import { getRandomInt, commonGameLogic } from '../index';

const checkEven = num => (num % 2 === 0 ? 'yes' : 'no');

const evenGameCondition = () => {
  const randomInt = getRandomInt(1, 99);
  const question = `${randomInt}`;
  const answer = checkEven(randomInt);
  return [question, answer];
};

const evenGame = () => {
  commonGameLogic('Answer "yes" if number even otherwise answer "no".', evenGameCondition);
};

export default evenGame;
