const express = require('express');
const authController = require('./../controllers/auth.controller');
const productCategoryController = require('./../controllers/product.category.controller');

const router = express.Router();

router
    .route('/')
    .get(productCategoryController.getAllProductCategory)
    .post(
        authController.protect,
        authController.restrictTo('admin'),
        productCategoryController.createProductCategory);

router
    .route('/:id')
    .get(productCategoryController.getProductCategory)
    .patch(
        authController.protect,
        authController.restrictTo('admin'),
        productCategoryController.updateProductCategory)
    .delete(
        authController.protect,
        authController.restrictTo('admin'),
        productCategoryController.deleteProductCategory);

module.exports = router;
