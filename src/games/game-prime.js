import { getRandomInt, commonGameLogic } from '../index';

const isPrime = (num) => {
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if ((num % i) === 0) {
      return true;
    }
  }
  return false;
};

const primeGameCondition = () => {
  const randomInt = getRandomInt(1, 99);
  const question = `${randomInt}`;

  const answer = isPrime(randomInt) ? 'yes' : 'no';
  return [question, answer];
};

const primeGame = () => {
  commonGameLogic('Is this number prime?', primeGameCondition);
};

export default primeGame;
