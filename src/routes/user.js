// Users Controller

const express = require('express');

const router = express.Router();
const connect = require('../data');
const {User} = require('../models');

connect((error, dbContext) =>{
    if(error) throw new Error("USER CONTROLLER: Error connecting to database")
    console.log('UserController Connected');

    router.get('/',(request, response)=>{
        console.log('> GET ALL USERS');
        response.type('json');

        dbContext.models.User.find()
            .then(result=> {
                if(result.length === 0) {
                    response.status(404).send('No users')
                }
                response.send(result);
            })
            .catch(error => {
                response.status(500).send(error)
            })
        // response.send();
    })

    router.get('/:userId',(request, response)=>{
        console.debug('> GET USER FOR USER ID');
        response.send();
    })

    router.post('/',(request, response)=>{
        console.debug('> CREATE USER');
        response.send();
    })

    router.put('/',(request, response)=>{
        console.debug('> UPDATE USER');
        response.send();
    })

    router.delete('/',(request, response)=>{
        console.debug('> DELETE USER');
        response.send();
    })
})

module.exports = router;