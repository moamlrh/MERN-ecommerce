const router = require('express').Router()

const productsController = require('../controllers/productsController') 

router.get('/get-all-products', productsController.getAllProducts )
router.post('/create-new-product', productsController.createNewProduct)


module.exports = router;