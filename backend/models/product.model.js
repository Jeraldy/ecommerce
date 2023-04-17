const mongoose = require('mongoose');
const slugify = require('slugify');
const commonModel = require('./common.model');

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Product name is required'],
        unique: true,
        trim: true
    },
    slug: {
        type: String,
        unique: true
    },
    categoryId: {
        type: mongoose.Schema.ObjectId,
        ref: 'ProductCategory'
    },
    subCategoryId: {
        type: mongoose.Schema.ObjectId,
        ref: 'ProductSubCategory'
    },
    previewImage: {
        type: String,
        required: [true, 'Product sub category is required']
    },
    price: {
        type: Number,
        required: [true, 'A product must have a price']
    },
    priceDiscount: {
        type: Number,
        default: 0,
        // validate: {
        //     validator: function (val) {
        //         return val > this.price;
        //     },
        //     message: 'Discount price ({VALUE}) should be below regular price'
        // }
    },
    ...commonModel,
});

ProductSchema.pre('save', function (next) {
    this.slug = slugify(this.name, { lower: true });
    next();
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;