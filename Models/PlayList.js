const mongoose = require('mongoose')
const playlistSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxLength: 255
    },
    songs: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:'Song'
        }
    ],
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    creationDate: {
        type: Date,
        default:Date.now()
    }
})
module.exports = mongoose.model('Playlist',playlistSchema)