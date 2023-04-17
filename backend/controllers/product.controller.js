const factory = require('./handle.factrory');
const Product = require('../models/product.model');

exports.createProduct = factory.createOne(Product)
exports.updateProduct = factory.updateOne(Product)
exports.deleteProduct = factory.deleteOne(Product)
exports.getAllProducts = factory.getAll(Product)
exports.getProduct = factory.getOne(Product)
