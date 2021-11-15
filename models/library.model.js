const mongoose = require('mongoose');

const booksSchema = new mongoose.Schema({
    bookName: {
        type: String,
        required: true
    },
    nameOfWriter: {
        type: String,
        required: true
    },
    yearOfPublication: {
        type: Number,
        required: true
    },
     language: {
        type: String,
        required: true
    },
     rating: {
        type: Number,
        required: true
    },
   

});

const book = mongoose.model('book', booksSchema);

module.exports = {
    book
}