
const ApiError = require('../config/errors/ApiError')
const Product = require('../models/productModel')
const { checkToken } = require('../util/token')

//  products/get-all-products
exports.getAllProducts = async (req, res, next) => {
    try {
        const products = await Product.find({}).limit(10)
        return res.status(200).json({
            msg: 'get all products sccuessfully !',
            products
        })
    } catch (error) {
        console.log(error)
        res.status(422)
        next(new Error('there is problem with get all products sorry !'))
    }


}

//  products/get-product-by-id/:id
exports.getProductById = async (req, res, next) => {
    const { id } = req.params
    try {
        const product = await Product.findById(id) // Product.findById(id, { reviews: { $slice: -2 } }) to limit reviews size
        if (!product) {
            next(ApiError.newError(404, 'There is no product with this id !'))
        } else {
            return res.status(200).json({
                msg: 'get product by id sccuessfully !',
                product
            })
        }
    } catch (error) {
        next(ApiError.newError(401, 'there is problem with get product with id, sorry !'))
    }
}

// products/create-new-product
exports.createNewProduct = async (req, res, next) => {
    const { title, description, imageURL, user, price } = req.body;
    try {
        const newProduct = { title, description, imageURL, user, price }
        const product = await Product.create(newProduct)
        if (product) {
            res.json({
                msg: "Product successful created",
                product: product
            })
        } else {
            res.status(403)
            throw new Error('there is problem when created new product, Sorry !')
        }
    } catch (error) {
        res.status(403)
        console.log(error)
        throw new Error('there is problem when created new product, Sorry !')
    }

}

exports.deleteProductById = async (req, res, next) => {
    const { id } = req.params;
    console.log(id)
    try {
        const deletedProduct = await Product.findByIdAndDelete(id)
        if (!deletedProduct) {

            next(ApiError.newError(404, 'there is not product with this id!'))
        } else {
            return res.json({
                msg: "product deleted successfull !",
                productId: deletedProduct._id

            })
        }
    } catch (error) {
        next(new Error(error))
    }
}

// add-new-reviews:id
exports.createNewReview = async (req, res, next) => {
    const userId = req.userId || '6069d4a5d2df583710eeb1b0'
    const { id } = req.params;
    const { text, rating } = req.body
    const newReview = { text, rating, created_by: userId }
    console.log(newReview)
    try {
        const product = await Product.findById(id)
        if (!product) {
            next(ApiError.newError('There is no product with this Id !'))
        } else {
            await product.reviews.push(newReview)
            await product.save()
            const lastReview = product.reviews[product.reviews.length - 1]
            return res.json({
                msg: "review add to the product",
                review: lastReview
            })
        }
    } catch (error) {
        res.status(403)
        next(ApiError.newError(('there is problem when created new review, Sorry !')))

    }

}