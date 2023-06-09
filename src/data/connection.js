// Data connection with mongoose
const mongoose = require('mongoose');

async function initDataConnection() {
    try {
        const connectionOptions = { useNewUrlParser: true, useUnifiedTopology: true };
        const dbContext = await mongoose.connect(process.env.MONGO_DB_URL, connectionOptions);
        return dbContext;        
    } catch({message, stack}) {
        console.error('Error Occures when trying to create a data connection.')
        console.error(message,stack);
    }
}

module.exports = initDataConnection;