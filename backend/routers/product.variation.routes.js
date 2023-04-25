const express = require('express');
const controller = require('./../controllers/product.variation.controller');
const pvoRouter = require('./product.variation.option.routes');
const pvcRouter = require('./product.variation.combination.routes');
const crudRouter = require('../utils/crud.router');

const router = express.Router();

router.use('/option', pvoRouter);
router.use('/combination', pvcRouter);

module.exports = crudRouter(router, controller.CRUD);
