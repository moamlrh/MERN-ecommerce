const { Schema, model } = require('mongoose')

const productSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    imageURL: {
        type: String,
        require: true
    },
    user: {
        type: Schema.Types.ObjectId,
        require: true,
        ref: 'User'
    },
    reviews: [{
        text: String,
        created_by: {
            type: Schema.Types.ObjectId,
            ref: "User"
        },
        rating: {
            type: Number,
            required: true
        }
    }],
    rating: {
        type: Number,
    },
    price: {
        type: Number,
        require: true,
    },
    numberOfBuyers: {
        type: Number,
        defaultValue: 0
    },
    countInStock: {
        type: Number,
        require: true,
        default: 0
    },
}, {
    timestamps: true
})

module.exports = model('Product', productSchema)