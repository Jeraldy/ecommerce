const express = require('express');
const authController = require('./../controllers/auth.controller');
const productVariationController = require('./../controllers/product.variation.controller');
const productVariationOptionRouter = require('./product.variation.option.routes');

const router = express.Router();

router.use('/option', productVariationOptionRouter);

router
    .route('/')
    .get(productVariationController.getAllProductVariation)
    .post(
        authController.protect,
        authController.restrictTo('admin'),
        productVariationController.createProductVariation);

router
    .route('/:id')
    .get(productVariationController.getProductVariation)
    .patch(
        authController.protect,
        authController.restrictTo('admin'),
        productVariationController.updateProductVariation)
    .delete(
        authController.protect,
        authController.restrictTo('admin'),
        productVariationController.deleteProductVariation);

module.exports = router;
