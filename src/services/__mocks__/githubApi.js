export const getUserInfo = () => {
  return Promise.resolve({
    'login': 'jodinkansagor',
    'id': 51837529
  });
};


export const getUserRepos = () => {
  return Promise.resolve([
    { id: '123', name: 'adventure' },
    { id: '234', name: 'good times' }
  ]);
};
