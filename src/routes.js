const express = require('express');

const routes = express.Router();

routes.get('/', (request, reponse) => reponse.json({ message: 'salveeee' }));

module.exports = routes;
