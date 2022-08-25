const sendToApi = async (username, userscore) => {
  try {
    const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/YJBtRUU6excuYPdCNPvH/scores/', {
      method: 'POST',
      body: JSON.stringify({
        user: username,
        score: userscore,
      }),
      headers: {
        'content-type': 'application/json; charset=UTF-8',
      },
    });
    return await response.json();
  } catch (error) {
    throw new Error(error.message);
  }
};

const getScores = async () => {
  try {
    const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/YJBtRUU6excuYPdCNPvH/scores/');
    const data = await response.json();
    return data.result;
  } catch (err) {
    throw new Error(err.message);
  }
};

export { sendToApi, getScores };