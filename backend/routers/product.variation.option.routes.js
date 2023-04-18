const express = require('express');
const authController = require('./../controllers/auth.controller');
const controller = require('./../controllers/product.variation.options.controller');

const router = express.Router();

router
    .route('/')
    .get(controller.getAllProductVariationOption)
    .post(
        authController.protect,
        authController.restrictTo('admin'),
        controller.createProductVariationOption);

router
    .route('/:id')
    .get(controller.getProductVariationOption)
    .patch(
        authController.protect,
        authController.restrictTo('admin'),
        controller.updateProductVariationOption)
    .delete(
        authController.protect,
        authController.restrictTo('admin'),
        controller.deleteProductVariationOption);

module.exports = router;
