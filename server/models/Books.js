const mongoose = require('mongoose')
const Schema = mongoose.Schema
const BookSchema = new Schema({
    id: {
        type: String,
        required: true
    },
    book: {
        type: String,
        required: true
    }
})

const Book = mongoose.model("Book", BookSchema)

module.exports = Book