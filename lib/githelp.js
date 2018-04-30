const axios = require("axios");

const getUserRepos = username => {
  return axios.get(
    "https://api.github.com/users/" + username + "/repos?per_page=100"
  );
};

const getUserInfo = username => {
  return axios.get("https://api.github.com/users/" + username);
};

module.exports = { getUserRepos, getUserInfo };
