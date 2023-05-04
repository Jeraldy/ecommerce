const mongoose = require('mongoose');
const commonModel = require('./common.model');
const Product = require('./product.model');
const ProductVariation = require('./product.variation.model');
const ProductVariationOption = require('./product.variation.option.model');

const ProductVariationCombinationSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.ObjectId,
        ref: 'Product',
        required: [true, "Product id is required!"],
        validate: {
            validator: async function (val) {
                return await Product.exists({ _id: val })
            },
            message: 'Product does not exist!'
        }
    },
    variationId: {
        type: mongoose.Schema.ObjectId,
        ref: 'ProductVariation',
        required: [true, "Product variation id is required!"],
        validate: {
            validator: async function (val) {
                return await ProductVariation.exists({ _id: val })
            },
            message: 'Product variation does not exist!'
        }
    },
    optionId:{
        type: mongoose.Schema.ObjectId,
        ref: 'ProductVariationOption',
        required: [true, "Product variation option is required!"],
        validate: {
            validator: async function (val) {
                return await ProductVariationOption.exists({ _id: val })
            },
            message: 'Product variation option does not exist!'
        }
    },
    ...commonModel
});

const ProductVariationCombination = mongoose.model('ProductVariationCombination',ProductVariationCombinationSchema);
module.exports = ProductVariationCombination;