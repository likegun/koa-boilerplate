'use strict';
const { readdir }  = require('../node-lib/filesystem.js');

const files = readdir(__dirname, {
	filter: file => !file.includes('index')
});

for(let file of files) {
	require(file);
}
