const express = require('express');
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const InvalidDataError = require('../errors/errors');
const NotFoundError = require('../errors/errors');

module.exports.createUser = (req, res, next) => {
  bcrypt.hash(req.body.password, 10)
    .then(hash => User.create({
      email: req.body.email,
      password: hash,
    }))
    .then((user) => {
      if (!user) {
        throw new InvalidDataError('Ivalid data passed');
      }
      res.send({ data: user })
    })
    .catch(next);
};


module.exports.login = (req, res, next) => {
  const { email, password } = req.body;
  return User.findUserByCredentials(email, password)
    .then((user) => {
      const token = jwt.sign({ _id: user._id }, 'super-strong-secret', { expiresIn: '7d' });
      res.send({ token });
    })
    .catch(next);
};

module.exports.getAllUsers = (req, res, next) => {
  User.find({})
    .then((user) => {
      console.log(user);
      if (!user) {
        throw new NotFoundError('No users found');
      }
      res.send({ data: user })
    })
    .catch(next);
};

module.exports.getUserByID = (req, res, next) => {
  User.findById(req.params.id)
    .then((user) => {
      if (!user) {
        throw new NotFoundError('No user with matching ID found');
      }
      res.send({ data: user })
    })
    .catch(next);
};

module.exports.updateProfile = (req, res, next) => {
  const { name, about } = req.body;
  User.findByIdAndUpdate(req.user._id, { name: name, about: about })
    .then(user => res.send({ data: user }))
    .catch(next);
};

module.exports.updateAvatar = (req, res, next) => {
  User.findByIdAndUpdate(req.user._id, req.body)
    .then(user => res.send({ data: user }))
    .catch(next);
};


module.exports.getUserInfo = (req, res) => {
  res.send(req.user._id);
};