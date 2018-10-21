const router = require('express').Router();
const authRoutes = require('./api/auth');
const githubRoutes = require('./api/github');

router.use('/auth', authRoutes);

router.use('/github', githubRoutes);

router.use('/', (req, res) => res.json({ message: 'welcome to the api!' }));

module.exports = router;
