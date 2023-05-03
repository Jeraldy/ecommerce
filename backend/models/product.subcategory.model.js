const mongoose = require('mongoose');
const commonModel = require('./common.model');
const ProductCategory = require('./product.category.model');

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
        required: [true, "Product category is required!"],
        validate: {
            validator: async function (val) {
                return await ProductCategory.exists({ _id: val })
            },
            message: 'Product category does not exist!'
        }
    },
    ...commonModel
});

const ProductSubCategory = mongoose.model('ProductSubCategory', ProductSubCategorySchema)

module.exports = ProductSubCategory;