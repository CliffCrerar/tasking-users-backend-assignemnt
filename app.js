// Main program
require('dotenv').config();

const app = require('./src');
const startupLog = require('./src/utils/startup-log');
const port = process.env.PORT || 3000;

app.listen(port, () => startupLog)

