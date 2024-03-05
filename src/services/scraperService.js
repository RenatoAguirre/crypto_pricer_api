const cryptos = require('../db/cryptos')
const scraper = require('../scraper/scraper')

const getPricesFromScrape = async () => {
  try {
    const currencies = cryptos.getAllCryptos()
    const prices = await scraper.scrapePrices(currencies)
    return prices
  } catch (error) {
    console.log('Error while scraping... ', error)
  }
}

// console.log(getPrices())
module.exports = {
  getPricesFromScrape
}
