const express = require('express');

const router = express.Router();

const productController = require('../controller/shopController/productController');
const { authenticateShop } = require('../middleware/auth');
const uploadImages = require('../middleware/multerMiddleware')

router.post('/add-product',authenticateShop,uploadImages, productController.addProduct);
router.get('/shop/product',authenticateShop, productController.getProductsForEachShop);
router.put('/shop/edit/product/:id',authenticateShop, productController.editProduct);
router.get('/all/products', productController.getAllProducts);
router.get('/single/product/:id', productController.getSingleProduct);
router.get('/single/product/for/edit/:id',authenticateShop, productController.getCurrentProductOnEdit);
router.post('/delete/product/:productId',authenticateShop, productController.deleteProduct);


module.exports = router