const router = require('express').Router();
const authRoutes = require("./api/auth");

router.use('/auth', authRoutes);

router.use('/', (req, res) => res.json({ message: 'welcome to the api!' }));

module.exports = router;
