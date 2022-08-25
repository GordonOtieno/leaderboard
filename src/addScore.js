import { sendToApi } from "./api";

const addScore = () =>{
  const form = document.querySelector('.add-form');
  const name = document.getElementById('name');
  const score = document.getElementById('score');

  form.addEventListener ('submit', (e) =>{
    e.preventDefault();
    sendToApi(name.value, score.value)
    .then(res =>{
        if(res.result ==='Leaderboard scores are well created.'){
            window.reload();
        }
    })
  })

}
export default addScore;