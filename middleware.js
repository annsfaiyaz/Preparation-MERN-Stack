const auth = (req, res, next) => {
    return res.status(401).json({ message: 'Unauthorized' });
}

module.exports = auth;