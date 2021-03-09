const mongoose = require('mongoose')
const albumSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxLength: 255,
        trim:true,
    },
    artist: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Artist',
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
    }
})
