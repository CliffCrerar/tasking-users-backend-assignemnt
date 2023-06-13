// Users Controller

const { handlePromise, guid, Validator } = require('../utils');
const { User } = require('../models');
const router = require('express').Router();

const validator = new Validator(['givenName', 'familyName', 'userName'])

router.get('/', (request, response) => {
    console.log('> GET ALL USERS');
    const dbPromise = User.Model.find()
    handlePromise(dbPromise, response, request.method)
})

router.get('/:userId', (request, response) => {
    console.debug('> GET USER FOR USER ID');
    const userId = request.params['userId'];
    if (!userId) {
        response.status(400).send({ message: 'user id is null' });
    }
    const dbPromise = User.Model.findById(request.params['userId']);
    handlePromise(dbPromise, response, request.method);
})

router.post('/', (request, response) => {
    console.debug('> CREATE USER');
    if (!request.body) {
        response.status(400).send({ message: 'Create user body is missing.' });
        return;
    }
    const { isValid, message } = validator.validate(request.body);
    if (!isValid) {
        response.status(400).send({ message });
        return;
    }
    const user = new User.Model({ ...request.body, dateCreated: new Date().toJSON() });
    const dbPromise = user.save();
    handlePromise(dbPromise, response, request.method);
})

router.put('/:userId', (request, response) => {
    console.debug('> UPDATE USER');
    const data = Object.keys(request.query).length === 0 ? request.body : request.query;
    if (!data) {
        response.status(400).send({ message: 'No data to update is attached to the request' });
        return;
    }
    const { isValid, message } = validator.validateUpdate(data);
    if (!isValid) {
        response.status(400).send({ message });
        return;
    }
    const dbPromise = User.Model.findByIdAndUpdate(request.params['userId'], data, { returnDocument: 'after' });
    handlePromise(dbPromise, response, request.method);
})

router.delete('/:userId', (request, response) => {
    console.debug('> DELETE USER');
    const userId = request.params['userId']
    if (!userId) {
        response.status(400).send({ message: 'No user id to indicate the user to delete' });
    }
    const dbPromise = User.Model.findByIdAndDelete({ userId });
    handlePromise(dbPromise, response, request.method)
})

module.exports = router;