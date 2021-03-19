const router = require('express').Router()
const { Album } = require('../db')

//.get mounted on /api/album
router.get('/', async (req, res, next) => {
  try {
    let albums = await Album.findAll({
      // include: {
      //   where: {
      //     artist: {
      //       [Sequelize.Op]:
      //     }
      //   }
      // }
    })
    console.log('album', albums)
    res.send(albums)
  } catch (err) {next(err)}
})

module.exports = router
