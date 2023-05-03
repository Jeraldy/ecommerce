const mongoose = require('mongoose');
const commonModel = require('./common.model');

const ProductCategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Product category name is required."],
        unique: true,
        trim: true
    },
    icon: {
        type: String,
    },
    ...commonModel
});

const ProductCategory = mongoose.model('ProductCategory', ProductCategorySchema)

module.exports = ProductCategory;