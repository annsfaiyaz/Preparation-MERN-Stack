const express = require('express');

module.exports = (Product) => {
    const router = express.Router();

    router.get('/', async (req, res) => {
        try {
            const products = await Product.find();
            return res.status(200).json(products);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    });
};