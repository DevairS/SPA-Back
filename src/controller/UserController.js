const jwt = require('jsonwebtoken');
const { Op } = require('sequelize');
const User = require('../models/User');
const connection = require('../database');

const SECRET = 'palavrasecreta';

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

  async login(req, res) {
    const { user, password } = req.body;

    const auth = await User(connection).findAll({
      attributes: ['user', 'password'],
      where: { [Op.and]: [{ user }, { password }] },
    });

    let userX = '';
    let passwordX = '';

    auth.map((item) => {
      userX = item.dataValues.user;
      passwordX = item.dataValues.password;
      return 0;
    });

    if (user === userX && password === passwordX) {
      const token = jwt.sign({ userId: 1 }, SECRET, { expiresIn: 300 });
      return res.json({ auth: true, token });
    }

    return res.json('User not found!');
  },
};
