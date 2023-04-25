const factory = require('./handle.factrory');
const ProductVariationCombination = require('../models/product.variation.combination.model');
const ProductVariation = require('../models/product.variation.model');
const ProductVariationOption = require('../models/product.variation.option.model');
const catchAsync = require('../utils/catchAsync');

exports.validate= catchAsync(async (req, res, next) => {
    const { variationId, optionId } = req.body
    const variation = await ProductVariation.findById(variationId);
    if(!variation){
        return next(new AppError("Variation does not exist!"));
    }

    const option = await ProductVariationOption.findById(optionId);
    if(!option){
        return next(new AppError("Variation option does not exist!"));
    }

    if(!option.variationId.equals(variation._id)){
        return next(new AppError("Variation does not have the given variation option!"));
    }
    next();
});

exports.CRUD = factory.CRUD(ProductVariationCombination)