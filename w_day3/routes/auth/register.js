const express = require('express');

module.exports = (User) => {
    const router = express.Router();

    router.post('/register', async (req, res) => {
        try {
            const { name, email, password } = req.body;
            const user = new User({ name, email, password });
            await user.save();
            return res.status(201).json(user);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    });

    return router;
};