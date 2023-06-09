// Model Index

const {Task, taskSchema} = require('./task');
const {User, userSchema} = require('./user');

module.exports = {
    User,
    Task,
    userSchema, 
    taskSchema
}