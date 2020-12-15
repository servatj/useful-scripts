const CoinGecko = require('coingecko-api');

const CoinGeckoClient = new CoinGecko();

const fetchPrice = (date) => {
  return CoinGeckoClient.coins.fetchHistory('bitcoin', { date });
}

const getSymbolPrice = async(date) => {
  const { data } = await fetchPrice(date);
  return {
    symbol: data.symbol,
    price: data.market_data.current_price.usd
  }
};

getSymbolPrice('30-12-2017').then(console.log)
