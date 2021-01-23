const express = require('express');
const userController = require('../../controllers/users.controller');
const Users = express.Router();

Users.get('/me', userController.getMe);
Users.get('/:id', userController.getUserById);
Users.get('/byUserName', userController.getUserById);

module.exports = Users;
