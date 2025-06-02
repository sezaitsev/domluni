const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/', async (req, res) => {
  const { telegram_user_id, name, birth_date, birth_time } = req.body;
  try {
    const user = await User.findOneAndUpdate(
      { telegram_user_id },
      { name, birth_date, birth_time },
      { upsert: true, new: true }
    );
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: 'Failed to save user data' });
  }
});

module.exports = router;
