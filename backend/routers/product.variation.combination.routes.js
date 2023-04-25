const express = require('express');
const controller = require('./../controllers/product.variation.combination.controller');
const pvcRouter = require('./product.variation.option.routes');
const crudRouter = require('../utils/crud.router');

const router = express.Router();

router.use('/option', pvcRouter);

module.exports = crudRouter(router, controller.CRUD);
