const express = require('express');
const cardsRouter = express.Router();
const { postCard, getAllCards, deleteCardByID, likeCard, dislikeCard } = require('../controllers/cards');
const { celebrate, Joi } = require('celebrate');

cardsRouter.post('/', celebrate({
    body: Joi.object().keys({
        name: Joi.string().required().min(2).max(30),
        link: Joi.string().required().uri(),
    }),
}), postCard); 
cardsRouter.get('/', getAllCards);
cardsRouter.delete('/:id', deleteCardByID);
cardsRouter.put('/:id/likes', likeCard);
cardsRouter.delete('/:id/likes', dislikeCard);


module.exports = cardsRouter;