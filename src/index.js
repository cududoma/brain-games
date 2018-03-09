import readlineSync from 'readline-sync';

const greetThePlayer = () => {
  const namePlayer = readlineSync.question('May I have your name? ');
  const answer = `Hello, ${namePlayer}! \n`;
  console.log(answer);
  return namePlayer;
};

const getRandomInt = (min, max) => Math.floor(Math.random() * ((max - min) + 1)) + min;

const commonGameLogic = (greetingMessage, gameLogicFunc) => {
  console.log('Welcome to the Brain Games!');
  console.log(greetingMessage);
  console.log();

  const playerName = greetThePlayer();
  for (let i = 1; i <= 3; i += 1) {
    const correctAnswer = gameLogicFunc(i);
    const answer = readlineSync.question('Your answer: ');
    if (answer === String(correctAnswer)) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}. \nLet's try again, ${playerName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${playerName}!`);
};

export { getRandomInt, greetThePlayer, commonGameLogic };
