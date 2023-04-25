const express = require('express');
const controller = require('./../controllers/product.category.controller');
const crudRouter = require('../utils/crud.router');

const router = express.Router();

module.exports = crudRouter(router, controller.CRUD);
