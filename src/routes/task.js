// Tasks Controller

const router = require('express').Router();
const { Task } = require('../models');
const { Validator } = require('../utils');
const handleDbPromise = require('../utils/handle-db-promise');
const _ = require('lodash')

const validator = new Validator(['name', 'description', 'user'])

router.get('/', (request, response) => {
    console.debug('Get all tasks')
    handleDbPromise(Task.Model.find(), response, request.method);
})

router.get('/:taskId', (request, response) => {
    console.debug('Get task for task Id: ', request.params['taskId'])
    var dbPromise = Task.Model.findById(request.params['taskId'])
    handleDbPromise(dbPromise, response, request.method)
})

router.get('/user/:userId', (request, response) => {
    console.debug('Get tasks for user with Id: ', request.params['userId'])
    const userId = request.params['userId'];
    if (!userId) {
        response.status(400).send('User Id is required to fetch tasks');
    }
    const dbPromise = Task.Model.find({ user: userId });
    handleDbPromise(dbPromise, response, request.method);
})

router.post('/', (request, response) => {
    console.debug('Post task');
    console.log(request.body);

    if (!request.body) {
        response.status(400).send({ message: 'Request needs a body create a task.' })
        return;
    }

    const { isValid, message } = validator.validateCreate(request.body);

    if (!isValid) {
        response.status(400).send({ message })
        return;
    }

    const task = new Task.Model({ ...request.body, dateCreated: new Date().toJSON() });

    task.save()
        .then(result => response.status(201).send(result))
        .catch(error => response.status(500).send({ error: error.message, stack: error.stack }));

})

router.put('/:taskId', (request, response) => {
    console.debug('Update Task for taskId:', request.params['taskId']);
    const taskId = request.params['taskId'];
    if (!taskId) {
        response.status(400).send({ message: 'Task Id is missing Id' });
        return;
    }

    if (!request.body) {
        response.status(400).send({ message: 'Request needs a body update a task.' })
        return;
    }

    if (!_.keys(request.body).includes('user')) {
        Task.Model.findById(taskId).then(result => {
            request.body.user = result.user;
        })
    }

    const { isValid, message } = validator.validateUpdate(request.body);

    if (!isValid) {
        response.status(400).send({ message })
        return;
    }

    const dbPromise = Task.Model.findByIdAndUpdate(taskId, request.body, { returnDocument: 'after' })
    handleDbPromise(dbPromise, response, request.method);
})

router.delete('/:taskId', (request, response) => {
    console.debug('Get all tasks');
    const taskId = request.params['taskId'];
    if (!taskId) {
        response.status(400).send({ message: 'To delete a task add a taskId param' });
    }
    const dbPromise = Task.Model.findByIdAndDelete(taskId);
    handleDbPromise(dbPromise, response, request.method);
})

module.exports = router