const Crypto = require('../models/Crypto');

exports.getAllCryptos = async (req, res) => {
  try {
    const cryptos = await Crypto.find();
    res.json(cryptos);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

exports.getGainers = async (req, res) => {
  try {
    const gainers = await Crypto.find().sort({ change24h: -1 });
    res.json(gainers);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

exports.getNewListings = async (req, res) => {
  try {
    const newest = await Crypto.find().sort({ createdAt: -1 });
    res.json(newest);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

exports.addCrypto = async (req, res) => {
  try {
    const { name, symbol, price, image, change24h } = req.body;
    if (!name || !symbol || !price) {
      return res.status(400).json({ message: 'Name, symbol and price are required.' });
    }
    const crypto = await Crypto.create({ name, symbol, price, image, change24h });
    res.status(201).json({ message: 'Cryptocurrency added successfully', crypto });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};