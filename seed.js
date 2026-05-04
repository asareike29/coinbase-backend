require('dotenv').config();
const mongoose = require('mongoose');
const Crypto = require('./models/Crypto');

const coins = [
  { name: 'Bitcoin', symbol: 'BTC', price: 67000, image: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png', change24h: 2.5 },
  { name: 'Ethereum', symbol: 'ETH', price: 3200, image: 'https://assets.coingecko.com/coins/images/279/large/ethereum.png', change24h: -1.2 },
  { name: 'Solana', symbol: 'SOL', price: 165, image: 'https://assets.coingecko.com/coins/images/4128/large/solana.png', change24h: 5.8 },
  { name: 'Cardano', symbol: 'ADA', price: 0.45, image: 'https://assets.coingecko.com/coins/images/975/large/cardano.png', change24h: 3.1 },
  { name: 'Dogecoin', symbol: 'DOGE', price: 0.16, image: 'https://assets.coingecko.com/coins/images/5/large/dogecoin.png', change24h: 7.4 },
  { name: 'Polkadot', symbol: 'DOT', price: 7.20, image: 'https://assets.coingecko.com/coins/images/12171/large/polkadot.png', change24h: -0.8 },
];

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    console.log('Connected to MongoDB...');
    await Crypto.deleteMany();
    console.log('Cleared old data...');
    await Crypto.insertMany(coins);
    console.log('Database seeded successfully!');
    process.exit();
  })
  .catch(err => {
    console.error('Seed error:', err.message);
    process.exit(1);
  });