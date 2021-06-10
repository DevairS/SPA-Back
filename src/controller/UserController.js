const User = require('../models/User');
const connection = require('../database');

module.exports = {
  async store(req, res) {
    const {
      name, user, email, password,
    } = req.body;

    const userCreate = await User(connection).create({
      name,
      user,
      email,
      password,
    });

    return res.json(userCreate);
  },

  async index(req, res) {
    const usersFindAll = await User(connection).findAll();
    return res.json(usersFindAll);
  },
};
