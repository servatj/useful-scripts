require('dotenv').config()
const Binance = require('binance-api-node').default;

//const client = Binance()

// Authenticated client, can make signed calls
const client = Binance({
  apiKey: process.env.API_KEY,
  apiSecret: process.env.API_SECRET
})

const getPrices = async () => {
  const data = await client.dailyStats({ symbol: 'ETHBTC' })
  console.log(data)
}

getPrices()
