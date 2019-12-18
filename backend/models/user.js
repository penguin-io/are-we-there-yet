const Sequelize = require('sequelize')
const sequelize = require('../database/database')

const User = sequelize.define('users', {
    // attributes
    email: {
      type: Sequelize.STRING,
      allowNull: false
    },
    password: {
      type: Sequelize.STRING
      // allowNull defaults to true
    }
  }, {
    // options
  });

module.exports = User