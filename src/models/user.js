// User Model

const
    mongoose = require('mongoose'),
    Task = require('./task'),
    { guid } = require('../utils'),
    unique = true,
    required = true,
    userDefinition = {
        userId: { type: String, required, unique },
        givenName: { type: String, required },
        familyName: { type: String, required },
        userName: { type: String, required, unique },
        dateCreated: { type: Date, required, default: new Date().toJSON() },
        tasks: { type: [Task.Schema], default: [] }
    },
    userSchema = mongoose.Schema(userDefinition);

userSchema.path('userName').index({ unique })
userSchema.path('userId').index({ unique })

module.exports = {
    Schema: userSchema,
    Model: mongoose.model('User', userSchema)
}