// Users Controller

const express = require('express');
const { handlePromise } = require('../utils');
const router = express.Router();
const connect = require('../data');
const { User } = require('../models');

connect((error, dbContext) => {
    if (error) throw new Error("USER CONTROLLER: Error connecting to database")
    console.log('UserController Connected');

    router.get('/', (request, response) => {
        console.log('> GET ALL USERS');
        response.type('json');
        const dbPromise = dbContext.models.User.find()
        handlePromise(dbPromise, response)
    })

    router.get('/:userId', (request, response) => {
        console.debug('> GET USER FOR USER ID');
        const userId = request.params['userId']
        const dbPromise = dbContext.models.User.find({ userId });
        handlePromise(dbPromise, response);
    })

    router.post('/', (request, response) => {
        console.debug('> CREATE USER');
        console.log(request.body);
        const user = new User(request.body);
        const dbPromise = user.save();
        handlePromise(dbPromise, response);
    })

    router.put('/:userId', (request, response) => {
        const userId = request.params['userId'];
        const query = request.query;

        console.log(userId, query)
        console.debug('> UPDATE USER');
        response.send();
    })

    router.delete('/', (request, response) => {
        console.debug('> DELETE USER');
        response.send();
    })
})

module.exports = router;