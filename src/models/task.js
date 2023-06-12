// Task Model

const
    mongoose = require('mongoose'),
    { guid } = require('../utils'),
    required = true,
    unique = true,
    taskDefinition = {
        taskId: { type: String, required, unique },
        name: { type: String, required },
        description: String,
        dateCreated: { type: Date, required, default: new Date().toJSON() },
        user: {
            type: mongoose.ObjectId,
            ref: 'User'
        }
    },
    taskSchema = mongoose.Schema(taskDefinition);

taskSchema.path('taskId').index({ unique })

module.exports = {
    Schema: taskSchema,
    Model: mongoose.model('Task', taskSchema)
}