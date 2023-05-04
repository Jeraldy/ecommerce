const factory = require('./handle.factrory');
const ProductSubCategory = require('../models/product.subcategory.model');

exports.CRUD = factory.CRUD(ProductSubCategory)