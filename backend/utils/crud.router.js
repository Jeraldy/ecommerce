const express = require('express');
const authController = require('./../controllers/auth.controller');

const crudRouter = (router, controller) => {
    router
        .route('/')
        .get(controller.getAll)
        .post(
            authController.protect,
            authController.restrictTo('admin'),
            controller.create);

    router
        .route('/:id')
        .get(controller.getOne)
        .patch(
            authController.protect,
            authController.restrictTo('admin'),
            controller.update)
        .delete(
            authController.protect,
            authController.restrictTo('admin'),
            controller.delete);
    return router;
}

module.exports = crudRouter;
