const express = require('express');

const router = express.Router();

const productController = require('../controller/productController');
const { authenticateShop } = require('../middleware/auth');
const uploadImages = require('../middleware/multerMiddleware')

router.post('/add-product',authenticateShop,uploadImages, productController.addProduct);
router.get('/shop/product',authenticateShop, productController.getProductsForEachShop)

module.exports = router