const express = require('express');
const app = express();
require('dotenv').config();
app.use(express.json());

const User = require('./models/user');
// const Product = require('./models/product');
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.log(err));

app.use('/auth', require('./routes/auth/register') (User));
app.use('/auth', require('./routes/auth/login') (User));
// app.use('/products', require('./routes/product/createProduct') (Product));


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});