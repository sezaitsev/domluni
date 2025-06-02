const express = require('express');
const router = express.Router();
const Session = require('../models/Session');

router.post('/', async (req, res) => {
  const { telegram_user_id, timestamp } = req.body;
  try {
    const session = new Session({ telegram_user_id, timestamp });
    await session.save();
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: 'Failed to log session' });
  }
});

module.exports = router;
