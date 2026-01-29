const express = require('express')
const router = express.Router()
const ProductCalls =require('../controllers/productController')
const ProductSeed = require('../controllers/seedProduct')

//seed products
router.get('/seed', ProductSeed.seedProduct);
//get
router.get('/api/products', ProductCalls.getAllProducts)
//post
router.post('/api/products', ProductCalls.createOneProduct)
//delete
router.delete('/api/products/:id', ProductCalls.deleteProduct)


module.exports = router