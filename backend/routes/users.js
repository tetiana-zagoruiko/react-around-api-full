const express = require('express');
const usersRouter = express.Router();
const { getAllUsers, getUserByID, updateProfile, updateAvatar, getUserInfo} = require('../controllers/users');
const { celebrate, Joi } = require('celebrate');

usersRouter.get('/', getAllUsers);
usersRouter.get('/me', getUserInfo);
usersRouter.get('/:id', getUserByID);
usersRouter.patch('/me', celebrate({
    body: Joi.object().keys({
        name: Joi.string().min(2).max(30),
        about: Joi.string().min(2).max(30),
    }),
}), updateProfile);
usersRouter.patch('/me/avatar', celebrate({
    body: Joi.object().keys({
        avatar: Joi.string().regex(/(^https?:\/\/)(w{3}\.)?\w[\w-]{1,}\.\w[\w\/]{1,}\/?/i),
    }),
}), updateAvatar);


module.exports = usersRouter;