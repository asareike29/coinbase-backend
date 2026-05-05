const mongoose = require('mongoose');
const Crypto = require('./models/Crypto');
require('dotenv').config();

const cryptos = [
  { name: "Bitcoin", symbol: "BTC", price: 67423, change24h: 2.34, image: "" },
  { name: "Ethereum", symbol: "ETH", price: 3521, change24h: 1.87, image: "" },
  { name: "Tether", symbol: "USDT", price: 1.00, change24h: 0.01, image: "" },
  { name: "BNB", symbol: "BNB", price: 412, change24h: -0.54, image: "" },
  { name: "Solana", symbol: "SOL", price: 178, change24h: 4.21, image: "" },
  { name: "XRP", symbol: "XRP", price: 0.62, change24h: -1.23, image: "" },
  { name: "USDC", symbol: "USDC", price: 1.00, change24h: 0.02, image: "" },
  { name: "Cardano", symbol: "ADA", price: 0.48, change24h: 3.15, image: "" },
];

async function seed() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected');

    await Crypto.deleteMany({});
    console.log('Cleared existing cryptos');

    await Crypto.insertMany(cryptos);
    console.log('Seeded', cryptos.length, 'cryptocurrencies');

    mongoose.disconnect();
    console.log('Done!');
  } catch (err) {
    console.error('Seed error:', err);
    process.exit(1);
  }
}

seed();