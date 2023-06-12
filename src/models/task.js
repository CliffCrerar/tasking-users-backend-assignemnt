// Task Model

const
    mongoose = require('mongoose'),
    { guid } = require('../utils'),
    required = true,
    unique = true,
    taskDefinition = {
        name: { type: String, required },
        description: String,
        dateCreated: { type: Date, required, default: new Date().toJSON() },
        user: {
            type: mongoose.ObjectId,
            ref: 'User'
        }
    },
    taskSchema = mongoose.Schema(taskDefinition);

module.exports = {
    Schema: taskSchema,
    Model: mongoose.model('Task', taskSchema)
}