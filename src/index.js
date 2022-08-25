import addScore from "./addScore";
import recentScore from "./recentScores";
import { getScores } from "./api.js";
import './styles/main.scss';

const tablecontent = document.querySelector('.scoreboard-table');

const display = async () => {
    const scores = await getScores();
    recentScore (scores);
    addScore();
}


const refresh = document.querySelector('.refresh-btn');
refresh.addEventListener('click', () => {
    tablecontent.innerHTML=''
    display()
})