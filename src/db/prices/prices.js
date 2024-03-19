const fs = require('fs')
/*
  TODO: implement a real db
*/
const getAllPrices = (currency) => {
  return JSON.parse(fs.readFileSync(`./${currency}Prices.json`, 'utf8', (err, data) => {
    if (err) throw err
  }))
}

const getId = (currency) => {
  const prices = getAllPrices(currency).prices // not optimal, change it later
  const lastRegister = prices.at(-1) || { id: 0 } // in case array is empty
  return lastRegister.id + 1
}

const getLastPrice = (currency) => {
  const prices = getAllPrices(currency).prices // not optimal, change it later
  return prices.at(-1) || { price: 0 } // in case array is empty
}

const writePrice = (currency, date, price) => {
  const data = getAllPrices(currency)
  data.prices.push(
    {
      id: getId(currency),
      date,
      price
    })
  fs.writeFileSync(`./${currency}Prices.json`, JSON.stringify(data), (err) => {
    if (err) throw err
  })
}

module.exports = {
  getAllPrices,
  writePrice,
  getId,
  getLastPrice
}