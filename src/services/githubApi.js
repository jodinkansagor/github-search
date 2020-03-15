const request = path => {
  return fetch(`https://cors-anywhere.herokuapp.com/https://api.github.com/users${path}`, {
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

export const getUserInfo = (userName) => request(`/${userName}`);
export const getUserRepos = (userName) => request(`/${userName}/repos`);
