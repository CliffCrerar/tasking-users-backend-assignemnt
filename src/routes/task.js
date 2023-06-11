// Tasks Controller

// Users Controller

const express = require('express');
const connect = require('../data');

const router = express.Router();

connect((error, dbContext) => {
    router.all('*', (req,res,next)=>{
        console.debug('Routing to Tasks')
        next();
    })
    console.log('Tasks Connecting to database');
    if (error) {
        console.error(error.message, error.stack);
        throw error;
    }

})




module.exports = router