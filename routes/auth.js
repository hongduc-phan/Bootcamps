const express = require('express');
const { protect, authorization } = require('../middlewares/auth');
const { register, login, getMe } = require('../controllers/auth');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/me', protect, authorization('admin'), getMe);

module.exports = router;
