// Users Controller

const { handlePromise, guid } = require('../utils');
const { User } = require('../models');
const router = require('express').Router();

router.get('/', (request, response) => {
    console.log('> GET ALL USERS');
    const dbPromise = User.Model.find()
    handlePromise(dbPromise, response)
})

router.get('/:userId', (request, response) => {
    console.debug('> GET USER FOR USER ID');

    const userId = request.params['userId'];
    const dbPromise = User.Model.findById(request.params['userId']);

    handlePromise(dbPromise, response);
})

router.post('/', (request, response) => {
    console.debug('> CREATE USER');

    const user = new User.Model({ ...request.body, dateCreated: new Date().toJSON() });
    const dbPromise = user.save();
    handlePromise(dbPromise, response, true);
})

router.put('/:userId', (request, response) => {
    console.debug('> UPDATE USER');
    const userId = request.params['userId'];
    const data = Object.keys(request.query).length === 0 ? request.body : request.query;
    const dbPromise = User.Model.findByIdAndUpdate(userId, data, { returnDocument: 'after' });
    handlePromise(dbPromise, response, true)
})

router.delete('/:userId', (request, response) => {
    console.debug('> DELETE USER');
    const dbPromise = User.Model.findOneAndDelete({ userId: request.params['userId'] });
    handlePromise(dbPromise, response)
})

module.exports = router;