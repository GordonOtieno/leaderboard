const recentScore = (scores) => {
  const table = document.querySelector('.scoreboard-table');

  scores.forEach((score) => {
    const tr = document.createElement('tr');
    // tr.classList.add('table-row');
    const td = document.createElement('td');
    // td.classList.add('table-data');
    td.innerHTML = `${score.user}: ${score.score}`;

    tr.appendChild(td);
    table.appendChild(tr);
  });
};
export default recentScore;