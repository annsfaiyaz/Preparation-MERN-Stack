const express = require('express');

module.exports = (Product) => {
    const router = express.Router();

    router.post('/', async (req, res) => {
        try {
            const { name, price, description } = req.body;
            const product = new Product({ name, price, description });
            await product.save();
            return res.status(201).json(product);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    });

    return router;
};