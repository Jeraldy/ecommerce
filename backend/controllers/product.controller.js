const factory = require('./handle.factrory');
const Product = require('../models/product.model');
const AppError = require('../utils/app.error');
const catchAsync = require('../utils/catchAsync');
const ProductCategory = require('../models/product.category.model');
const ProductSubCategory = require('../models/product.subcategory.model');

exports.validateProduct = catchAsync(async (req, res, next) => {
    const { price, priceDiscount, categoryId, subCategoryId } = req.body
    if (price < priceDiscount) {
        return next(new AppError("Discount price should be less than a regular price."));
    }
    
    const productCategory = await ProductCategory.findById(categoryId);
    if(!productCategory){
        return next(new AppError("Product category does not exist!"));
    }

    const productSubCategory = await ProductSubCategory.findById(subCategoryId);
    if(!productSubCategory){
        return next(new AppError("Product sub category does not exist!"));
    }

    if(!productSubCategory.categoryId.equals(productCategory._id)){
        return next(new AppError("Product category does not have the given product sub category!"));
    }
    next();
});

exports.createProduct = factory.createOne(Product)
exports.updateProduct = factory.updateOne(Product)
exports.deleteProduct = factory.deleteOne(Product)
exports.getAllProducts = factory.getAll(Product)
exports.getProduct = factory.getOne(Product)
