const mongoose = require('mongoose')
const songSchema = mongoose.Schema({
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
    artist: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Artist'
    },
    likes: {
        type: Number,
        default:0
    },
    dislikes: {
        type: Number,
        default:0
    },
    uploadedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    uploadDate: {
        type: Date,
        default:Date.now()
    },
    creationDate: {
        type: Date,
        required:true
    },
    album: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Album'
    }

})
module.exports = mongoose.model('Song',songSchema)
