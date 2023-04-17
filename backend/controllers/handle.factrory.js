const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/app.error');
const APIFeatures = require('./../utils/api.features');

exports.deleteOne = Model =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.findByIdAndDelete(req.params.id);

    if (!doc) {
      return next(new AppError('No document found with that ID', 404));
    }

    res.status(204).json({ status: 'success', data: null });
  });

exports.updateOne = Model =>
  catchAsync(async (req, res, next) => {
    const data = await Model.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    if (!data) {
      return next(new AppError('No document found with that ID', 404));
    }

    res.status(200).json({ status: 'success', data });
  });

exports.createOne = Model =>
  catchAsync(async (req, res, next) => {
    if (req.user) {
      req.body.createdBy = req.user._id
    }
    const data = await Model.create(req.body);
    res.status(201).json({ status: 'success', data });
  });

exports.getOne = (Model, popOptions) =>
  catchAsync(async (req, res, next) => {
    let query = Model.findById(req.params.id);
    if (popOptions) query = query.populate(popOptions);
    const data = await query;

    if (!data) {
      return next(new AppError('No document found with that ID', 404));
    }

    res.status(200).json({ status: 'success', data });
  });

exports.getAll = Model =>
  catchAsync(async (req, res, next) => {
    // To allow for nested GET reviews on tour (hack)
    let filter = {};
    // if (req.params.tourId) filter = { tour: req.params.tourId };

    const features = new APIFeatures(Model.find(filter), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();
    //const data = await features.query.explain();
    const data = await features.query;

    res.status(200).json({ status: 'success', results: data.length, data });
  });