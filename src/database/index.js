const Sequelize = require('sequelize');

const connection = new Sequelize(process.env.DATABASE_URL);

connection.authenticate().then(console.log).catch(console.error);

module.exports = connection;

//
connection.sync({ force: true });
