const { chromium } = require('playwright')

async function scrapePrice (currency, context) {
  const page = await context.newPage()
  await page.goto(currency.url)
  const price = await page.textContent('[class="sc-f70bb44c-0 jxpCgO base-text"]')
  await page.close()
  return price
}

async function scrapePrices (currencies) {
  const prices = []
  const browser = await chromium.launch({ headless: false })
  const context = await browser.newContext()
  for (const currency of currencies.cryptos) { // must be a list of objects
    prices.push(
      {
        currency: currency.name,
        price: await scrapePrice(currency, context)
      }
    )
  }
  await context.close()
  await browser.close()
  return prices
}

module.exports.scrapePrices = scrapePrices
