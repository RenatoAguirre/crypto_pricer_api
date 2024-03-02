const { chromium } = require('playwright')

const currencies = require('./cryptos.json')

async function getPrice (currency, context) {
  const page = await context.newPage()
  await page.goto(currency.url)
  const price = await page.textContent('[class="sc-f70bb44c-0 jxpCgO base-text"]')
  await page.close()
  return price
}

async function getPrices (currencies) {
  const prices = []
  const browser = await chromium.launch({ headless: false })
  const context = await browser.newContext()
  for (const currency of currencies.crypto) {
    prices.push(
      {
        currency: currency.name,
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
