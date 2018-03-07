import readlineSync from 'readline-sync';

const greeting = () => {
  const nameGamer = readlineSync.question('May I have your name? ');
  const answer = `Hello, ${nameGamer}! \n`;
  console.log(answer);
  return nameGamer;
};

export default greeting;
