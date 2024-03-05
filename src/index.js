const express = require('express')
const scraperRouter = require('./routes/scraperRoutes.js')
const cryptoRouter = require('./routes/cryptoRoutes.js')

const app = express()
const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('hello world')
})

app.use('/scraper', scraperRouter)
app.use('/crypto', cryptoRouter)

app.listen(PORT, () => console.log(`server listening on port ${PORT}`))
