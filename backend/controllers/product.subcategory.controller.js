const factory = require('./handle.factrory');
const ProductSubCategory = require('../models/product.subcategory.model');

exports.createProductSubCategory = factory.createOne(ProductSubCategory);
exports.updateProductSubCategory = factory.updateOne(ProductSubCategory);
exports.deleteProductSubCategory = factory.deleteOne(ProductSubCategory);
exports.getAllProductSubCategory = factory.getAll(ProductSubCategory);
exports.getProductSubCategory = factory.getOne(ProductSubCategory);