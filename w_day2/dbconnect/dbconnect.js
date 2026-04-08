const mongoose = require('mongoose');

const User = require('../models/user');
const Product = require('../models/product');

const dbconnect = async () => {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');
    return [User, Product];
};

module.exports = dbconnect;
