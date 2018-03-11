import { getRandomInt, commonGameLogic } from '../index';

const checkPrime = (num) => {
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if ((num % i) === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const primeGameCondition = () => {
  const randomInt = getRandomInt(1, 99);
  const question = `${randomInt}`;

  const answer = checkPrime(randomInt);
  return [question, answer];
};

const primeGame = () => {
  commonGameLogic('Is this number prime?', primeGameCondition);
};

export default primeGame;
