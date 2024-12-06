// middleware/auth.js
module.exports = (req, res, next) => {
    if (!req.session.user) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    req.user = req.session.user; // Add user data to req for use in controllers
    next();
};
