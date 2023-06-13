// User Model

const
    mongoose = require('mongoose'),
    Task = require('./task'),
    { guid } = require('../utils'),
    unique = true,
    required = true,
    userDefinition = {
        givenName: { type: String, required },
        familyName: { type: String, required },
        userName: { type: String, required, unique },
        dateCreated: { type: Date, required },
        tasks: [Task.Schema]
    },
    userSchema = mongoose.Schema(userDefinition);

userSchema.path('userName').index({ unique })

module.exports = {
    Schema: userSchema,
    Model: mongoose.model('User', userSchema)
}