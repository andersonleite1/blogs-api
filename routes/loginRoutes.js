const express = require('express');

const middleware = require('../middlewares');
const login = require('../controllers/loginController');

const router = express.Router();

router.post(
  '/',
  middleware.validateEmail,
  middleware.validatePassword,
  login,
);

module.exports = router;
