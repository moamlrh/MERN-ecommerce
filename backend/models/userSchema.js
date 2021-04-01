const { Schema, model } = require('mongoose')

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

module.exports = model('User', userSchema)