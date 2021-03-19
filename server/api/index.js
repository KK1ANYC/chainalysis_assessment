const router = require('express').Router()
const morgan = require('morgan')
const bodyParser = require('body-parser')
const {db, Album, Artist, Song} = require('./db')
// connect your API routes here!

router.use('/album', require('./album'))


module.exports = router
