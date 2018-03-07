#!/usr/bin/env node

import readlineSync from 'readline-sync';
import greetThePlayer from '../index';

const getRandomInt = (min, max) => Math.floor(Math.random() * ((max - min) + 1)) + min;

const checkEven = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const gameLogic = (count, namePlayer) => {
  const randomInt = getRandomInt(1, 99);
  const question = `Question: ${randomInt}`;
  console.log(question);
  const answer = readlineSync.question('Your answer: ');

  if (answer === checkEven(randomInt)) {
    if (count < 3) {
      console.log('Correct!');
      gameLogic(count + 1);
    } else {
      console.log(`Correct! \nCongratulations, ${namePlayer}!`);
    }
  } else {
    console.log(`${answer} is wrong answer ;(. Correct answer was ${checkEven(randomInt)}. \nLet's try again, ${namePlayer}!`);
  }
};

console.log('Welcome to the Brain Games!');
console.log('Answer "yes" if number even otherwise answer "no". \n');

const namePlayer = greetThePlayer();
const count = 1;
gameLogic(count, namePlayer);
