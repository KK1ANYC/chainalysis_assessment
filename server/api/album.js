const router = require('express').Router()
const Album = require('../db/album')

router.get('/', async (req, res, next) => {
  try {
    let albums = await Albums.findAll({
      // include: {
      //   where: {
      //     artist: {
      //       [Sequelize.Op]:
      //     }
      //   }
      // }
    })
    console.log('album', albums)
  } catch (err) {next(err)}
})

module.exports = Album
