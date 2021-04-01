
const Product = require('../models/productModel')

//  products/get-all-products
exports.getAllProducts = async (req, res, next) => {
    try {
        Product.find().then(pro => {
            res.json({
                msg: 'get all products sccuessfully !',
                products:pro,
            })
        })
    } catch (error) {
        console.log(error)
        res.status(422)
        throw new Error('there is problem with get all products sorry !')
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