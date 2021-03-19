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
    res.send(albums)
  } catch (err) {next(err)}
})

router.get('/:albumId', async (req, res, next) => {
  try {
    let album = await Album.findByPk(req.params.albumId, {
      include: [Artist, Song]
    });
    res.send(album);
  } catch (err) {next(err)}
})



module.exports = router
