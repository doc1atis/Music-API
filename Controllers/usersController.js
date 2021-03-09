const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
exports.login = async (req, res) => {
    const token = jwt.sign({ id: "12id344" }, process.env.JWT_SECRET_KEY)
    const passwordsMatched = await bcrypt.compare("plainPassword", 'encryptedPassword')
    if (!passwordsMatched) {
        return res.status(400).json({apiErrorCode:'authentication'})
    }
    res.send(`Token is: ${token}`)
}
exports.register = async (req, res) => {
    try {
        const salt = await bcrypt.genSalt(12)
        const encryptedPassword = await bcrypt.hash("olgy234", salt)
        // store that password in DB
        console.log(encryptedPassword);
    } catch (error) {
        console.log(error);
    }
    res.send("register here")
}