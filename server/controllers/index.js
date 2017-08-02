'use strict';
const { readdir }  = require('../node-lib/filesystem.js');

const files = readdir(__dirname, {
	filter: file => !file.includes('index')
});

module.exports = (app) => {
  for(let file of files) {
    require(file)(app);
  }
};
