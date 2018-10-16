const router = require('express').Router();
const axios = require('axios');
const { authenticateGithub } = require('../../middlewares/auth-mw');

router.post('/github', async (req, res) => {
  try {
    const { admin } = req.body;

    const user = await authenticateGithub(req.body);
    return res.json({ user, admin });
  } catch (err) {
    console.log(err.message);
    res.status(401).json({ authenticated: false });
  }
});

module.exports = router;
