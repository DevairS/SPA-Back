const express = require('express');
const UserController = require('./controller/UserController');

const routes = express.Router();

routes.get('/', UserController.index);

routes.post('/CreateUser', UserController.store);

module.exports = routes;
