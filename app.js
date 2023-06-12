// Main program
require('dotenv').config();
const path = require('path');
// global.get = (modPath) => require(path.join(__dirname, modPath));
const app = require('./src');
const {startupLog} = require('./src/utils');
const port = process.env.PORT || 3000;

app.listen(port, () => startupLog);
