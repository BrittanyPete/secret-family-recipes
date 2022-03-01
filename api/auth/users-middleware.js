const db = require('../data/db-config');


const usernameExists = async (req, res, next) => {
    try {
        const exists = await db('users')
        .where('username', req.body.username.trim())
        .first()

        if(exists) {
            next({status: 401, message: 'Username is not available'})
        } else {
            next()
        }
    }
    catch (err) {
        next(err)
    }
}

const validateUser = async (req, res, next) => {
    try {
        const { username, password } = req.body;
        if(!username || !password) {
            next({status: 400, message: 'Username and password required'})
        } else {
            next()
        }
    }
    catch (err) {
        next(err)
    }
}


module.exports = {
    usernameExists,
    validateUser
}