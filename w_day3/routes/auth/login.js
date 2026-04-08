const express = require('express');

module.exports = (User) => {
    const router = express.Router();

    router.post('/login', async (req, res) => {
        try {
            const { email, password } = req.body;
            const user = await User.findOne({ email });
            if (!user) {
                return res.status(401).json({ message: 'Invalid email or password' });
            }
            if (user.password !== password) {
                return res.status(401).json({ message: 'Invalid email or password' });
            }
            return res.status(200).json({ message: 'Login successful' });
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    });

    return router;
};