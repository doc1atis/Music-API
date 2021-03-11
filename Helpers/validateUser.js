const validator = require('validator')
module.exports = (req) => {
    const { email, password } = req.body
    let valObj = {
        message: "password is required",
        isValid: true, entity: 'password',
    }
    if (!password) {
        valObj['isValid'] = false
        return valObj
    }

    if (!validator.isEmail(email)) {
        valObj['message'] = "enter a valid email"
        valObj['entity'] = "email"
        valObj['isValid'] = false
        return valObj
    }
    return valObj
}