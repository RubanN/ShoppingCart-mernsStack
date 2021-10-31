const express = require('express');
const router = express.Router();

const { getAllProducts, getProductById } = require('../controller/ProductController')
// get all products from DB
// route GET /api/products
//access Public
router.get('/', getAllProducts)
//@desc GET a product by id from DB
//@route GET/api/products/:id
router.get('/:id', getProductById)
module.exports = router;