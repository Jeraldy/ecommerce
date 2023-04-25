const factory = require('./handle.factrory');
const ProductCategory = require('../models/product.category.model');

exports.CRUD = factory.CRUD(ProductCategory)