const companies = require("./companies");
const countries = require("./countries");

const globalVariables = {
  ...companies,
  ...countries
};

module.exports = globalVariables;
