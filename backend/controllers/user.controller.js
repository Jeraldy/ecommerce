const User = require('../models/user.model')
const catchAsync = require('../utils/catchAsync');

const createUser = catchAsync(async (req, res, next) => {
    const user = await User.create(req.body);
    res.status(201).json({
        status: 'success',
        data: { user }
    })
})

const getAllUsers = catchAsync(async (req, res, next) => {
    const users = await User.find();
    res.status(200).json({
        status: 'success',
        data: { users }
    });
})

module.exports = { createUser, getAllUsers }