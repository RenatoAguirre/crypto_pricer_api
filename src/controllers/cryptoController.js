const cryptoService = require('../services/cryptoService')

const getAllCryptos = (req, res) => {
  const cryptos = cryptoService.getAllCryptos()
  res.status(200).send({ cryptos })
}

module.exports = {
  getAllCryptos
}
