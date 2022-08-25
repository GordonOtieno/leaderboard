import addScore from './addScore';
import recentScore from './recentScores';
import { getScores } from './api.js';
import './main.css';

const tablecontent = document.querySelector('.scoreboard-table');

const display = async () => {
  const scores = await getScores();
  recentScore(scores);
  addScore();
};
display();
const refresh = document.querySelector('.refresh-btn');
refresh.addEventListener('click', () => {
  tablecontent.innerHTML = '';
  display();
});