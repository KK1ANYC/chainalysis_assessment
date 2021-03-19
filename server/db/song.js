const db = require('./db')
const Sequelize = require('sequelize');

const Song = db.define('Song', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  audioUrl: {
    type: Sequelize.STRING,
  },
  genre: {
    type: Sequelize.STRING,
  }
});

module.exports = Song
