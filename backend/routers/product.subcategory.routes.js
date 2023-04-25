const express = require('express');
const crudRouter = require('../utils/crud.router');
const controller = require('../controllers/product.subcategory.controller');

const router = express.Router();

module.exports = crudRouter(router, controller.CRUD);
