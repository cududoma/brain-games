import readlineSync from 'readline-sync';
import greeting from '../index';

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const checkEven = (num) => {
  if (num % 2 === 0) {
  	return 'yes';
  }
	return 'no';
};

const logicGame = (count) => {
  const randomInt = getRandomInt(1, 99);
  const question = `Question: ${randomInt}`;
  console.log(question);
  const answer = readlineSync.question('Your answer: ');

  if (answer === checkEven(randomInt)) {
    if (count < 3) {
      console.log('Correct!');
      count += 1;
      logicGame(count);
    } else return console.log(`Correct! \nCongratulations, ${nameGamer}!`);
  } else {
    return console.log(`${answer} is wrong answer ;(. Correct answer was ${checkEven(randomInt)}. \nLet's try again, ${nameGamer}!`);
  }
};


console.log('Welcome to the Brain Games!');
console.log('Answer "yes" if number even otherwise answer "no". \n');

const nameGamer = greeting();
const count = 1;
logicGame(count);

