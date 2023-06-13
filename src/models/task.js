// Task Model

const
    mongoose = require('mongoose'),
    { guid } = require('../utils'),
    required = true,
    taskDefinition = {
        name: { type: String, required },
        description: String,
        dateCreated: { type: Date, required },
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