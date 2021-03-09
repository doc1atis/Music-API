const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        maxLength: 255,
        trim:true
    },
    password: {
        type: String,
        required: true
    },
    likes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Song'
    }],
    dislikes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Song'
    }],
    createdAt:{type:Date, default:Date.now()}
    
})

const User = mongoose.model('User', userSchema)

module.exports = User