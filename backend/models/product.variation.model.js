const mongoose = require('mongoose');
const commonModel = require('./common.model');

const ProductVariationSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: [true, "Product variation name is required!"]
    },
    ...commonModel
});

const ProductVariation = mongoose.model('ProductVariation',ProductVariationSchema);
module.exports = ProductVariation;