const express = require('express');
const controller = require('./../controllers/product.variation.options.controller');
const crudRouter = require('../utils/crud.router');

const router = express.Router();

module.exports = crudRouter(router, controller.CRUD);

