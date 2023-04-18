const factory = require('./handle.factrory');
const ProductVariation = require('../models/product.variation.model');

exports.createProductVariation = factory.createOne(ProductVariation);
exports.updateProductVariation = factory.updateOne(ProductVariation);
exports.deleteProductVariation = factory.deleteOne(ProductVariation);
exports.getAllProductVariation = factory.getAll(ProductVariation);
exports.getProductVariation = factory.getOne(ProductVariation);