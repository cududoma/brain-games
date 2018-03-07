import readlineSync from 'readline-sync';

const greetThePlayer = () => {
  const namePlayer = readlineSync.question('May I have your name? ');
  const answer = `Hello, ${namePlayer}! \n`;
  console.log(answer);
  return namePlayer;
};

export default greetThePlayer;
