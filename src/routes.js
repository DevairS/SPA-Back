const express = require('express');
const UserController = require('./controller/UserController');

const routes = express.Router();

routes.get('/ListUsers', UserController.index);

routes.post('/CreateUser', UserController.store);

module.exports = routes;
