const cryptos = require('../db/cryptos')

const getAllCryptos = () => {
  return cryptos.getAllCryptos()
}

module.exports = {
  getAllCryptos
}
