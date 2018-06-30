var mongoose = require('mongoose');

//mongoose.model is the 'mongoose model' or shape that our item in the db will take on
//This is similar to making the blueprint for an object in JS. THIS IS THE BLUEPRINT

//--------------TODO MODEL--------------//
var Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
})

module.exports = {Todo}