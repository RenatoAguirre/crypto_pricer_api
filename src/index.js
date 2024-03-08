const express = require('express')
const scraperRouter = require('./routes/scraperRoutes.js')
const cryptoRouter = require('./routes/cryptoRoutes.js')

const app = express()
const PORT = process.env.PORT || 3000

app.use('/scraper', scraperRouter)
app.use('/', cryptoRouter)

app.listen(PORT, () => console.log(`server listening on port ${PORT}`))
