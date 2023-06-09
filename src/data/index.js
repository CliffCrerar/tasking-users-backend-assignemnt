// data index

const initDataConnection = require('./connection');

module.exports = (callback) => {
    const dbContextPromise = initDataConnection();
    dbContextPromise.then(dbContext => callback(null, dbContext));
    dbContextPromise.catch(dbContextError => callback(dbContextError, null));
}
