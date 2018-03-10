import { commonGameLogic, getRandomInt } from '../index';


const progressionLogic = () => {
  const step = getRandomInt(2, 5);
  const startNum = getRandomInt(2, 9);
  const sequenceLenght = 10;
  const skipped = getRandomInt(2, sequenceLenght - 2);
  const progession = [];
  for (let i = 0; i < sequenceLenght; i += 1) {
    progession.push(startNum + (step * i));
  }

  const answer = progession[skipped];
  progession[skipped] = '..';
  const question = progession.join(' ');
  return [question, answer];
};

const progressionGame = () => {
  commonGameLogic('What number is missing in this progression?', progressionLogic);
};

export default progressionGame;
