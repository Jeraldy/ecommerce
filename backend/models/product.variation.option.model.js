const mongoose = require('mongoose');
const commonModel = require('./common.model');
const ProductVariation = require('./product.variation.model');

const ProductVariationOptionSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: [true, "Product variation name is required!"]
    },
    variationId: {
        type: mongoose.Types.ObjectId,
        ref: 'ProductVariation',
        required: [true, "Product variation is required!"],
        validate: {
            validator: async function (val) {
                return await ProductVariation.exists({ _id: val })
            },
            message: 'Product variation does not exist!'
        }
    },
    ...commonModel
})

const ProductVariationOption = mongoose.model('ProductVariationOption',ProductVariationOptionSchema);
module.exports = ProductVariationOption