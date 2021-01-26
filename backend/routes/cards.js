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
cardsRouter.delete('/:id', celebrate({
    params: Joi.object().keys({
        id: Joi.string().hex().length(24),
    })
}), deleteCardByID);
cardsRouter.put('/:id/likes', celebrate({
    params: Joi.object().keys({
        id: Joi.string().hex().length(24),
    })
}), likeCard);
cardsRouter.delete('/:id/likes', celebrate({
    params: Joi.object().keys({
        id: Joi.string().hex().length(24),
    })
}), dislikeCard);


module.exports = cardsRouter;