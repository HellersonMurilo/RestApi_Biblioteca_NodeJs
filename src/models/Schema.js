const mongoose = require("mongoose")

const librarySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true
    },
    launch: {
        type: Number,
        required: true
    },
})

// Crie e exporte o modelo com o nome 'User' e baseado no esquema
const LibrarySchema = mongoose.model('Library', librarySchema);
module.exports = LibrarySchema;