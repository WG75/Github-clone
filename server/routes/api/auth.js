const router = require('express').Router();
const axios = require('axios');
const { authenticateGithub } = require('../../middlewares/auth-mw');

router.post('/github', async (req, res) => {
  try {
    const { admin } = req.body;

    const user = await authenticateGithub(req.body);
    user.isAdmin = admin;
    return res.json({ user });
  } catch (err) {
    const statusCode = err.response ? err.response.status : 500;
    return res.status(statusCode).json({ authenticated: false });
  }
});

module.exports = router;
