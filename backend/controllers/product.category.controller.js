const factory = require('./handle.factrory');
const ProductCategory = require('../models/product.category.model');

exports.createProductCategory = factory.createOne(ProductCategory);
exports.updateProductCategory = factory.updateOne(ProductCategory);
exports.deleteProductCategory = factory.deleteOne(ProductCategory);
exports.getAllProductCategory = factory.getAll(ProductCategory);
exports.getProductCategory = factory.getOne(ProductCategory);