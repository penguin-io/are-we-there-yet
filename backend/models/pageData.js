const Sequelize = require('sequelize')
const sequelize = require('../database/database')

const pageData = sequelize.define('page_data', {
    // attributes
    user_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    short_desc: {
      type: Sequelize.STRING,
    },
    category: {
      type: Sequelize.STRING,
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false
    },
    content: {
      type: Sequelize.STRING,
    },
    extra: {
      type: Sequelize.STRING,
    },
    type: {
      type: Sequelize.STRING,
      allowNull: false,
    }
  }, {
    // options
  });

module.exports = pageData