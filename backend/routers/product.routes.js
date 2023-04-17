const express = require('express');
const authController = require('./../controllers/auth.controller');
const productController = require('./../controllers/product.controller');

const productCategoryRouter = require('./product.category.routes');
const productSubCategoryRouter = require('./product.subcategory.routes');

const router = express.Router();

router.use('/category', productCategoryRouter);
router.use('/subcategory', productSubCategoryRouter);

router
    .route('/')
    .get(productController.getAllProducts)
    .post(
        authController.protect,
        authController.restrictTo('admin'),
        productController.createProduct);

router
    .route('/:id')
    .get(productController.getProduct)
    .patch(
        authController.protect,
        authController.restrictTo('admin'),
        productController.updateProduct)
    .delete(
        authController.protect,
        authController.restrictTo('admin'),
        productController.deleteProduct);


module.exports = router;