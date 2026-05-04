const mongoose = require('mongoose');

const cryptoSchema = new mongoose.Schema({
  name: { type: String, required: true },
  symbol: { type: String, required: true, uppercase: true },
  price: { type: Number, required: true },
  image: { type: String, default: '' },
  change24h: { type: Number, default: 0 }
}, { timestamps: true });

module.exports = mongoose.model('Crypto', cryptoSchema);