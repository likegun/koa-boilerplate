'use strict';
const app = require('./server/app.js');
const config = require('./config');
require('./server/bootstrap');

app.listen(config.serverPort || 3000, () => {
  console.log(`Listen on port ${config.serverPort || 3000}`);
});
