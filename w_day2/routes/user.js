const express = require('express');

module.exports = (User) => {
    const router = express.Router();

    router.get('/', async (req, res) => {
        try {
            const users = await User.find();
            return res.status(200).json(users);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    });

    return router;
};
