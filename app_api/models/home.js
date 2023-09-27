var mongoose = require('mongoose');

var bookItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    description: String,
    rating: {
        type: Number,
        default: 0,
        min: 0,
        max: 5
    },
    image: String,
    review: String
});

mongoose.model('BookItem', bookItemSchema);