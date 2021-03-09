const mongoose = require('mongoose')
const artistSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxLength: 255,
        trim:true
    },
    albums: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:'Album'
        }
    ]
})
module.exports = mongoose.model('Artist',artistSchema)
