var chalk = require("chalk");

var message = chalk.redBright.bgGreen.strikethrough("Hello ") + chalk.dim.cyan.inverse("World");
console.log(message);