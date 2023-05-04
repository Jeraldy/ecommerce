const factory = require('./handle.factrory');
const ProductVariation = require('../models/product.variation.model');

exports.CRUD = factory.CRUD(ProductVariation)