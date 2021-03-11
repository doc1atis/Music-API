const mongoose = require('mongoose')
const songsSchema = require('./Song')
module.exports = mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxLength: 255,
        trim:true,
    },
    songs: [songsSchema],
  
    uploadDate: {
        type: Date,
        default:Date.now()
    },
})
