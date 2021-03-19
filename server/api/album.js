const router = require('express').Router()
const { Album, Artist, Song } = require('../db')
const Sequelize = require('sequelize')
const Op = Sequelize.Op

//.get mounted on /api/album
router.get('/', async (req, res, next) => {
  try {
    let albums = await Album.findAll({
      include:
       [Artist]
    })
    res.send(albums)
  } catch (err) {next(err)}
})

module.exports = router
