// Task Model

const mongoose = require('mongoose');

const taskDefinition = {
    taskId: mongoose.ObjectId,
    name: String,
    description: String,
    dateCreated: Date,
    user: {
        type: mongoose.ObjectId,
        ref: 'User'
    }
} 

const taskSchema = mongoose.Schema(taskDefinition);
const Task = mongoose.model('Task', taskSchema);

module.exports = {Task, taskSchema}