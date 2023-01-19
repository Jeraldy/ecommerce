const crypto = require('crypto');
const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please tell us your name!']
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
  active: {
    type: Boolean,
    default: true,
    select: false
  }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
