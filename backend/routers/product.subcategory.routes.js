const express = require('express');
const authController = require('../controllers/auth.controller');
const productSubCategoryController = require('../controllers/product.subcategory.controller');

const router = express.Router();

router
    .route('/')
    .get(productSubCategoryController.getAllProductSubCategory)
    .post(
        authController.protect,
        authController.restrictTo('admin'),
        productSubCategoryController.createProductSubCategory);

router
    .route('/:id')
    .get(productSubCategoryController.getProductSubCategory)
    .patch(
        authController.protect,
        authController.restrictTo('admin'),
        productSubCategoryController.updateProductSubCategory)
    .delete(
        authController.protect,
        authController.restrictTo('admin'),
        productSubCategoryController.deleteProductSubCategory);

module.exports = router;