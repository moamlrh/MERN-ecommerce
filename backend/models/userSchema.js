const { Schema, model } = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    isAdmin: {
        type: Boolean,
        defaultValue: false
    },
    password: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password,this.password)
}
userSchema.pre('save', async function (next) {
    const user = this;
    if (!user.isModified('password')) return next()
    user.password = await bcrypt.hash(user.password, 12)
    next()
})

module.exports = model('User', userSchema)