const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../secrets');

module.exports = (req, res, next) => {
    const token = req.headers.authorization;
    if (token) {
        jwt.verify(token, JWT_SECRET, (err, decoded) => {
            if (err) {
                next({ status: 401, message: 'Invalid token'})
            } else {
                req.decodedJwt = decoded
                next()
            }
        })
    } else {
        next({ status: 401, message: 'Token required'})
    }
}