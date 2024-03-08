const express = require('express')
const cryptoController = require('../controllers/cryptoController')

const router = express.Router()

router.get('/', (req, res) => res.send('routes'))
router.get('/currencies', cryptoController.getAllCryptos)

module.exports = router
