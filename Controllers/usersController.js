const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const User = require('../Models/User')
const validUser = require('../Helpers/validateUser')
exports.login = async (req, res) => {
    try {
        let user = await User.findOne({ email: req.body.email })
    if (!user) {
        return res.status(400).json({loginErrorMes:"Invalid Password or Email"})
    }
    const passwordsMatched = await bcrypt.compare(req.body.password,user.password)
    
    if (!passwordsMatched) {
        return res.status(400).json({loginErrorMes:"Invalid Password or Email"})
    }
        const token = jwt.sign(
            { id: user._id },
            process.env.JWT_SECRET_KEY,
            {
                expiresIn:60*60
            }
        )
    return res.status(200).json({token})
    } catch (error) {
       res.status(400).json({unknownEr:true}) 
    }
    
}

exports.register = async (req, res) => {
    try {
        let user = await User.findOne({ email: req.body.email })
        if (user) {
            return res.status(400).json({existingUser:"User already exists"})
        }
        const valObj = validUser(req)
        if (!valObj['isValid']) {
            return res.status(400).json(valObj)
        }
        user = new User(req.body)
        const salt = await bcrypt.genSalt(12)
        user.password = await bcrypt.hash(user.password, salt)
        await user.save()
        return res.status(201).json({userCreated:true})
    } catch (error) {
        console.log(error);
        res.status(400).send("failed to register user")
    }
    
}