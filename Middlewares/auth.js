const jwt = require('jsonwebtoken')
module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization;
        const payload = jwt.verify(token, process.env.JWT_SECRET_KEY)
        req.id = payload['id']
        next()
    } catch (error) {
        res.status(401).json(error)
    }
   
}