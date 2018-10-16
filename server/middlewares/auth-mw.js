const axios = require('axios');
const btoa = require('btoa');

const authenticateGithub = async (data) => {
  const githubUrl = 'https://api.github.com/user';
  const {
    username, password, token, authType,
  } = data;

  const encodedUsernameAndPassWord = username && password ? btoa(`${username}:${password}`) : null;

  const response = await axios.get(githubUrl, {
    headers: {
      Authorization:
        authType === 'basic' ? `basic ${encodedUsernameAndPassWord}` : `Bearer ${token}`,
    },
  });

  const user = response.data;

  return user;
};

module.exports.authenticateGithub = authenticateGithub;
