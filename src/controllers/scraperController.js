const scraperServices = require('../services/scraperService')

const getAllPrices = async (req, res) => {
  const prices = await scraperServices.getPricesFromScrape()
  res
    .send({ prices })
}

module.exports = {
  getAllPrices
}
