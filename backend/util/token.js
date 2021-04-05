const jwt = require('jsonwebtoken')
const ApiError = require('../config/errors/ApiError')

exports.generateToken = async (id) => {
    return await jwt.sign({ id }, process.env.JWT_SIGN_SECRET_KEY, {
        expiresIn: '30h'
    })
}

exports.checkToken = async (req, res, next) => {
    const token = req.headers.authorization ? req.headers.authorization.split(' ')[1] : null
    if (!token) {
        next(ApiError.newError(422, 'You\'r not authentication, please check your token & try again !'))
    }
    try {
        const decodedToken = await jwt.verify(token, process.env.JWT_SIGN_SECRET_KEY)
        req.userId = decodedToken.id;
        console.log(req.userId)
        next()
    } catch (error) {
        next(ApiError.newError(422, 'You\'r not authentication, please check your token & try again !'))
    }
}