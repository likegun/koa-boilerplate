'use strict';
const mongoose = require('mongoose');
const config = require('../../config');

mongoose.connect(config.mongodb.url, config.mongodb.options || {})
.then(() => {
  console.log('Mongodb connected!');
})
.catch(e => {
  console.log(`can not connect to mongodb because of ${e}`);
});
