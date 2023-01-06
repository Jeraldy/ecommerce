const express = require('express');
const UserController = require('../controllers/user.controller')

const { createUser, getAllUsers } = UserController;
const router = express.Router();

router.route('/')
    .get(getAllUsers)
    .post(createUser);

module.exports = router