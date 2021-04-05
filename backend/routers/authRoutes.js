const router = require('express').Router()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const ApiError = require('../config/errors/ApiError')

const User = require('../models/userSchema')
const { generateToken } = require('../util/token')


router.post('/login', async (req, res, next) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email })
        if (user) {
            if (await user.comparePassword(password)) {
                return res.json({
                    user,
                    token: await generateToken(user._id)
                })
            } else {
                next(ApiError.newError(401, 'Please check your Password !'))
            }
        } else {
            next(ApiError.newError(401, 'Please check your Email/Password'))
        }
    } catch (error) {
        res.status(401)
        next(ApiError.newError(401, 'unknow error please check your information and try again !'))
    }
})



router.post('/signup', async (req, res, next) => {
    const { email, password, name } = req.body;

    try {
        const user = await User.findOne({ email })
        if (!user) {
            const newUser = await User.create({ name, email, password })
            return res.json({
                msg: "user created successful !",
                user: {
                    id: newUser._id,
                    name: newUser.name,
                    email: newUser.email
                }
            })
        } else {
            next(ApiError.newError(401, 'Email used by another user !'))
        }
    } catch (error) {
        console.log(error)
        next(ApiError.newError(401, 'Please check Your informations!'))
    }
})


module.exports = router;