const mongoose = require('mongoose');
const slugify = require('slugify');
const commonModel = require('./common.model');
const ProductCategory = require('./product.category.model');
const ProductSubCategory = require('./product.subcategory.model');

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Product name is required!'],
        unique: true,
        trim: true
    },
    slug: {
        type: String,
        unique: true
    },
    categoryId: {
        type: mongoose.Schema.ObjectId,
        ref: 'ProductCategory',
        required: [true, "Product Category is required!"],
        validate: {
            validator: async function (val) {
                return await ProductCategory.exists({ _id: val })
            },
            message: 'Product category does not exist!'
        }
    },
    subCategoryId: {
        type: mongoose.Schema.ObjectId,
        ref: 'ProductSubCategory',
        required: [true, "Product sub category is required!"],
        validate: {
            validator: async function (val) {
                return await ProductSubCategory.exists({ _id: val })
            },
            message: 'Product sub category does not exist!'
        }
    },
    previewImage: {
        type: String,
        required: [true, 'Product sub category is required']
    },
    price: {
        type: Number,
        required: [true, 'A product must have a price'],
        min: 0
    },
    priceDiscount: {
        type: Number,
        default: 0,
        min: 0
    },
    ...commonModel,
});

ProductSchema.pre('save', function (next) {
    this.slug = slugify(this.name, { lower: true });
    next();
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;