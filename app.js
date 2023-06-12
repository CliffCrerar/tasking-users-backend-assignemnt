// Main program
require('dotenv').config();

const startupLog = require('./src/utils/startup-log');
const port = process.env.PORT || 3000;

require('./src')((error, apiAndDb) => {
    if (error) {
        console.error(error.message, error.stack)
        return;
    }
    const { dbContext, app } = apiAndDb;
    console.log("Data Connections: ", dbContext.connections.length);
    app.listen(port, () => startupLog(port));
});



