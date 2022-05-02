const express = require('express');

const middleware = require('../middlewares');
const user = require('../controllers/userController');

const router = express.Router();

router.post(
  '/',
  middleware.validateName,
  middleware.validateEmail,
  middleware.validatePassword,
  user.create,
);

module.exports = router;
