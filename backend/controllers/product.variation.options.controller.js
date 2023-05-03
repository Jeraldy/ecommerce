const factory = require('./handle.factrory');
const ProductVariationOption = require('../models/product.variation.option.model');

exports.createProductVariationOption = factory.createOne(ProductVariationOption);
exports.updateProductVariationOption = factory.updateOne(ProductVariationOption);
exports.deleteProductVariationOption = factory.deleteOne(ProductVariationOption);
exports.getAllProductVariationOption = factory.getAll(ProductVariationOption);
exports.getProductVariationOption = factory.getOne(ProductVariationOption);