const BASE = require("../base");

const DEV = {
  ...BASE,
  BASE_API: "https://api.imgur.com/3/"
};

module.exports = JSON.stringify(DEV);
