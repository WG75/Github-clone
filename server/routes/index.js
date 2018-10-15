const router = require('express').Router();

router.use('/', (req, res) => res.json({ message: 'welcome to the api!' }));

module.exports = router;
