const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    DueDate: {
        type: Date,
        required: true
    }
});

const Todo = mongoose.model('Todo', todoSchema);
module.exports = Todo;