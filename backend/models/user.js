const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const NoRightsError = require('../errors/errors');


const userSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 2,
    maxlength: 30,
    default: "Jacques Cousteau",
  },
  about: {
    type: String,
    minlength: 2,
    maxlength: 30,
    default: "Explorer",
  },
  avatar: {
    type: String,
    default: "https://pictures.s3.yandex.net/resources/avatar_1604080799.jpg",
    validate: /(^https?:\/\/)(w{3}\.)?\w[\w-]{1,}\.\w[\w\/]{1,}\/?/gi 
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: email => validator.isEmail(email),
      message: '{VALUE} is not a valid email'
    }
  },
  password: {
    type: String,
    required: true,
    select: false
  }
});


userSchema.statics.findUserByCredentials = function (email, password) {
  return this.findOne({ email }).select('+password')
    .then((user) => {
      if (!user) {
        throw new NoRightsError('There is no such email in the database');
      }

      return bcrypt.compare(password, user.password)
        .then((matched) => {
          if (!matched) {
            throw new NoRightsError('Email and passwords don\'t match');
          }

          return user;
        });
    });
};

userSchema.methods.toJSON = function () {
  var obj = this.toObject();
  delete obj.password;
  return obj;
}


module.exports = mongoose.model('user', userSchema);