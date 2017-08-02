const PATH = require('path');
console.log(PATH.join(__dirname,(process.env.NODE_ENV || 'dev') + '_config.js'));
module.exports = require(PATH.join(__dirname, `config.${process.env.NODE_ENV || 'dev'}`));
