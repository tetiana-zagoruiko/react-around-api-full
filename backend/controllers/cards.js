const express = require('express');
const router = express.Router();
const Card = require('../models/card');
const cardsRouter = require('../routes/cards');
const NoRightsError = require('../errors/errors');
const InvalidDataError = require('../errors/errors');
const NotFoundError = require('../errors/errors');

module.exports.postCard = (req, res, next) => {
  const { name, link } = req.body;
  const owner = req.user._id;

  Card.create({ name, link, owner })
    .then((card) => {
      if (!card) {
        throw new InvalidDataError('Ivalid data passed');
      }
      res.send({ data: card })
    })
    .catch(next);
};

module.exports.getAllCards = (req, res, next) => {
  Card.find({})
    .then((card) => {
      if (!card) {
        throw new NotFoundError('No cards found');
      }
      res.send(card)
    })
    .catch(next);
};

module.exports.deleteCardByID = (req, res, next) => {
    Card.findById(req.params.id)
    .then(card => {
      if (card.owner == req.user._id) {
        Card.findByIdAndRemove(req.params.id)
        .then(res.send({ message: 'The card was removed' }))
      } else {
        throw new NoRightsError('You can only delete yours cards');
      }
    })
    .catch(next);
};


module.exports.likeCard = (req, res, next) => {
  Card.findByIdAndUpdate(
    req.params.id,
    { $addToSet: { likes: req.user._id } },
    { new: true },
  )
    .then(card => res.send({ data: card }))
    .catch(next);
};

module.exports.dislikeCard = (req, res, next) => {
  Card.findByIdAndUpdate(
    req.params.id,
    { $pull: { likes: req.user._id } },
    { new: true },
  )
    .then(card => res.send({ data: card }))
    .catch(next);
};
