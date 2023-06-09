// User Model

const mongoose = require('mongoose');
const { taskSchema } = require('./task');

const userDefinition =  {
    userId: mongoose.ObjectId,
    givenName: String,
    familyName: String,
    userName: String,
    tasks: [taskSchema]
}

const userSchema = mongoose.Schema(userDefinition)
const User = mongoose.model('User', userSchema);
module.exports = {
    User,
    userSchema
}