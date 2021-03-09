const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    email: String,
    name: String,
    likes:Array
})

const User = mongoose.model('User', userSchema)

module.exports = User