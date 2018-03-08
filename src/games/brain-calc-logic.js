import readlineSync from 'readline-sync';
import { getRandomInt, greetThePlayer } from '../index';

const checkAnswer = (answer, question, namePlayer) => {
  if (Number(answer) === question) {
    console.log('Correct!');
    return 1;
  }
  console.log(`${answer} is wrong answer ;(. Correct answer was ${question}. \nLet's try again, ${namePlayer}!`);
  return 2;
};

const calcLogic = () => {
  console.log('What is the result of the expression?\n');
  const namePlayer = greetThePlayer();
  let firstTermExp = getRandomInt(1, 99);
  let secondTermExp = getRandomInt(1, 99);

  const sumQuestion = `Question: ${firstTermExp} + ${secondTermExp}`;
  console.log(sumQuestion);
  let answer = readlineSync.question('Your answer: ');
  const sum = firstTermExp + secondTermExp;
  if (checkAnswer(answer, sum, namePlayer) === 2) return;

  firstTermExp = getRandomInt(1, 99);
  secondTermExp = getRandomInt(1, 99);
  const diffQuestion = `Question: ${firstTermExp} - ${secondTermExp}`;
  console.log(diffQuestion);
  answer = readlineSync.question('Your answer: ');
  const diff = firstTermExp - secondTermExp;
  if (checkAnswer(answer, diff, namePlayer) === 2) return;

  firstTermExp = getRandomInt(1, 99);
  secondTermExp = getRandomInt(1, 99);
  const multiQuestion = `Question: ${firstTermExp} * ${secondTermExp}`;
  console.log(multiQuestion);
  answer = readlineSync.question('Your answer: ');
  const multi = firstTermExp * secondTermExp;

  if (checkAnswer(answer, multi, namePlayer) === 1) console.log(`Congratulations, ${namePlayer}!`);
};

export default calcLogic;
