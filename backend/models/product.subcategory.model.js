const mongoose = require('mongoose');
const commonModel = require('./common.model');

const ProductSubCategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Product sub category name is required."],
        unique: true,
        trim: true
    },
    icon: {
        type: String,
    },
    categoryId: {
        type: mongoose.Schema.ObjectId,
        ref: 'ProductCategory',
        required: [true, "Product Category is required!"]
    },
    ...commonModel
})

const ProductSubCategory = mongoose.model('ProductSubCategory', ProductSubCategorySchema)

module.exports = ProductSubCategory;