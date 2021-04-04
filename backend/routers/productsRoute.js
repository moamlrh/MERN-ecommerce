const router = require('express').Router()

const productsController = require('../controllers/productsController')

router.get('/get-all-products', productsController.getAllProducts)
router.get('/get-product-by-id/:id', productsController.getProductById)
router.post('/create-new-product', productsController.createNewProduct)
router.delete('/delete-product-by-id/:id', productsController.deleteProductById)
router.post('/add-new-reviews/:id', productsController.createNewReview)

module.exports = router;