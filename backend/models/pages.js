const Sequelize = require('sequelize')
const sequelize = require('../database/database')

const pages = sequelize.define('pages', {
    // attributes
    user_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    slug: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    type: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  }, {
    // options
  });

module.exports = pages