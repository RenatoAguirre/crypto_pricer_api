const cryptos = require('./cryptos.json')

const getAllCryptos = () => {
  return cryptos
}

module.exports = {
  getAllCryptos
}

// console.log(getAllCryptos())
