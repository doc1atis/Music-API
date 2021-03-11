const mongoose = require('mongoose')
const albumsSchema = require('./Album')
const artistSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxLength: 255,
        trim:true
    },
    albums: [albumsSchema],
     uploadedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
})
module.exports = mongoose.model('Artist',artistSchema)
