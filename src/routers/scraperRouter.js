const express = require('express')
const scraperController = require('../controllers/scraperController')

const router = express.Router()

router.get('/prices', scraperController.getAllPrices)
module.exports = router
