export const getUserInfo = (userName) => {
  return fetch(`https://cors-anywhere.herokuapp.com/https://api.github.com/users/${userName}`, {
    headers: {
      origin: null
    }
  })
    .then(res => Promise.all([res.ok, res.json()]))
    .then(([ok, json]) => {
      if (!ok) throw json;

      return json;
    });
};
