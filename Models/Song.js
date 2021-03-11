const mongoose = require('mongoose')
module.exports = mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxLength: 300,
        trim:true
    },
    coverImageUrl: {
        type: String,
        required: true,
        maxLength: 800
    },
    audioUrl: {
        type: String,
        required: true,
        maxLength:800
    },
    likes: {
        type: Number,
        default:0
    },
    dislikes: {
        type: Number,
        default:0
    },
    uploadDate: {
        type: Date,
        default:Date.now()
    },
})

