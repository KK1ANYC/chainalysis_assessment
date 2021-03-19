const db = require('./db')
const Sequelize = require('sequelize');

const Album = db.define('Album', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  artworkUrl: {
    type: Sequelize.STRING,
    defaultValue: "default-album.jpg",
  },
});

module.exports = Album
