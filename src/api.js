const sendToApi = async (username, userscore) => {
    try {
      const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Zl4d7IVkemOTTVg2fUdz/scores/', {
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
   const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Zl4d7IVkemOTTVg2fUdz/scores/');
   const data = await response.json();
   return data.result;

   }catch(err){
    new Error(err.message)
   }
}

export {sendToApi, getScores};