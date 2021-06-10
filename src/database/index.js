const Sequelize = require('sequelize');

const UserFactory = require('../models/User');

const connection = new Sequelize(process.env.DATABASE_URL);

UserFactory(connection);

module.exports = connection;
