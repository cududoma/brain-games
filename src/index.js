import readlineSync from 'readline-sync';

const greeting = () => {
  const nameGamer = readlineSync.question('May I have your name? ');
  const answer = `Hello, ${nameGamer}!`;
  console.log(answer);
};

export default greeting;
