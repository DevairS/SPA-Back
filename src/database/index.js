const Sequelize = require('sequelize');

const UserFactory = require('../models/User');

const connection = new Sequelize(process.env.DATABASE_URL);

const i = UserFactory(connection);

console.log(i);

module.exports = connection;
