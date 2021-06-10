const { DataTypes, Model } = require('sequelize');

class User extends Model {

}

function UserFactory(sequelize) {
  return User.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Users',
  });
}

module.exports = UserFactory;
