const githelp = require("./lib/githelp");
const username = "digitalcolony";

githelp.getUserInfo(username).then(response => {
  const json = response.data;
  for (var key in json) {
    if (json.hasOwnProperty(key)) {
      console.log(key + " -> " + json[key]);
    }
  }
});

githelp.getUserRepos(username).then(response => {
  for (i = 0; i < response.data.length; i++) {
    console.log(
      `[${i + 1}] ${response.data[i].name} - ${response.data[i].description}`
    );
  }
});

// TODO: Handle users with > 100 Repos
