const router = require('express').Router()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const ApiError = require('../config/errors/ApiError')

const User = require('../models/userSchema')


router.post('/login', async (req, res, next) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email })
        if (user) {
            const checkdPassword = await bcrypt.compare(password, user.password)
            if (checkdPassword) {
                const token = await jwt.sign({ email: user.email, id: user._id }, process.env.JWT_SIGN_SECRET_KEY, { expiresIn: '2h' })
                return res.json({
                    user: { email: user.email, name: user.name },
                    token
                })
            } else {
                res.status(401)
                throw new Error('Please check your Password !');
            }
        } else {
            res.status(401)
            throw new Error('Please check your Email/Password !');
        }
    } catch (error) {
        res.status(401)
        next(ApiError.newError(401, 'Fuck you there is an ERROR FROM API Error'))
        // next(new Error('There is an Error !'));
    }
})



router.post('/signup', async (req, res, next) => {
    const { email, password, name } = req.body;

    try {
        const user = await User.findOne({ email })
        if (!user) {
            const hashedPassword = await bcrypt.hash(password, 12)

            const newUser = await User.create({ name, email, password: hashedPassword })
            return res.json({
                msg: "user created successful !",
                user: {
                    id: newUser._id,
                    name: newUser.name,
                    email: newUser.email,
                }
            })
        }
        next(ApiError.newError(401, 'Email used by another user !'))
    } catch (error) {
        next(ApiError.newError(401, 'Please check Your informations!'))
    }
})


module.exports = router;