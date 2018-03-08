import readlineSync from 'readline-sync';
import { getRandomInt, greetThePlayer, checkAnswer } from '../index';

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
  console.log('Find the greatest common divisor of given numbers.\n');
  const namePlayer = greetThePlayer();
  for (let i = 1; i <= 3; i += 1) {
    const firstTermExp = getRandomInt(1, 99);
    const secondTermExp = getRandomInt(1, 99);
    console.log(`Question: ${firstTermExp} ${secondTermExp}`);
    const answer = readlineSync.question('Your answer: ');
    const question = gcd(firstTermExp, secondTermExp);
    if (checkAnswer(answer, question, namePlayer) === 2) return;
  }
  console.log(`Congratulations, ${namePlayer}!`);
};

export default gcdLogic;
