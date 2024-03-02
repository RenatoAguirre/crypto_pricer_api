const { chromium } = require('playwright')

const currencies = ['bitcoin', 'bnb', 'ethereum']

async function getPrice (currency, context) {
  const page = await context.newPage()
  await page.goto(`https://coinmarketcap.com/currencies/${currency}`)
  const price = await page.textContent('[class="sc-f70bb44c-0 jxpCgO base-text"]')
  await page.close()
  return price
}

async function getPrices (currencies) {
  const prices = []
  const browser = await chromium.launch({ headless: true })
  const context = await browser.newContext()
  for (const currency of currencies) {
    prices.push(
      {
        currency,
        price: await getPrice(currency, context)
      }
    )
  }
  await context.close()
  await browser.close()
  return prices
}

;(async (currencies) => {
  const prices = await getPrices(currencies)
  console.log(prices)
})(currencies)
