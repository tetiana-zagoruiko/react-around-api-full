const express = require('express');
const usersRouter = express.Router();
const { getAllUsers, getUserByID, updateProfile, updateAvatar, getUserInfo} = require('../controllers/users');
const { celebrate, Joi } = require('celebrate');

usersRouter.get('/', getAllUsers);
usersRouter.get('/me', getUserInfo);
usersRouter.get('/:id', celebrate({
    params: Joi.object().keys({
        id: Joi.string().hex().length(24),
    })
}), getUserByID);
usersRouter.patch('/me', celebrate({
    body: Joi.object().keys({
        name: Joi.string().min(2).max(30),
        about: Joi.string().min(2).max(30),
    }),
}), updateProfile);
usersRouter.patch('/me/avatar', celebrate({
    body: Joi.object().keys({
        avatar: Joi.string().uri(),
    }),
}), updateAvatar);


module.exports = usersRouter;