const router = require('express').Router()
const { Album, Artist, Song } = require('../db')
const Sequelize = require('sequelize')
const Op = Sequelize.Op

//.get mounted on /api/album
router.get('/', async (req, res, next) => {
  try {
    let albums = await Album.findAll({
      include: [Artist]
    })
    res.json(albums)
  } catch (err) {next(err)}
})

//.get mounted on /api/album/:albumId
router.get('/:albumId', async (req, res, next) => {
  try {
    let album = await Album.findByPk(req.params.albumId, {
      include: [Artist, {model: Song, include: [Artist]}]
    });
    res.json(album);
  } catch (err) {next(err)}
})



module.exports = router
