const scraper = require('./scraper/scraper.js')

const currencies = require('./scraper/cryptos.json')

;(async (currencies) => {
  const prices = await scraper.getPrices(currencies)
  console.log(prices)
})(currencies)
