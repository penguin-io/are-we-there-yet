const Sequelize = require('sequelize')
const sequelize = require('../database/database')

const baseData = sequelize.define('base_data', {
    // attributes
    user_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    footer: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    posts: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    about: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    archive: {
      type: Sequelize.TINYINT,
      allowNull: false,
    },
    contact: {
      type: Sequelize.STRING,
      allowNull: false,
    }
  }, {
    // options
  });

module.exports = baseData