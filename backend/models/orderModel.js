const { Schema, model } = require('mongoose')

const orderSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        required: true
    },
    orderItems: [{
        name: {
            type: String,
            required: true
        },
        qty: {
            type: Number,
            required: true
        },
        imageURL: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        product: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: "Product"
        }
    }],
    shippingAddress: {
        address: {
            type: String,
            required: true,
        },
        city: {
            type: String,
            required: true,
        },
        postalCode: {
            type: String,
            required: true,
        },
        country: {
            type: String,
            required: true,
        },
    },
    paymentMethod: {
        type: String,
        require: true,
    },
    paymentResult: {
        id: {
            type: String,
        },
        status: {
            type: String,
        },
        update_tim: {
            type: String,
        },
        email_address: {
            type: String,
        },
    },
    taxPrice: {
        type: Number,
        require: true,
        default: 0.0
    },
    shippingPrice: {
        type: Number,
        require: true,
        default: 0.0
    },
    totalPrice: {
        type: Number,
        require: true,
        default: 0.0
    },
    isPaid: {
        type: Boolean,
        require: true,
        default: false
    },
    paidAt: {
        type: Date
    },
    isDelivered: {
        type: Boolean,
        require: true,
        default: false
    },
    deliverdAt: {
        type: Date
    },
}, {
    timestamps: true
})

module.exports = model('Order', orderSchema)