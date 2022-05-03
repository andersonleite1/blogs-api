const express = require('express');

const middleware = require('../middlewares');
const validateJWT = require('../middlewares/auth/validateJWT');
const user = require('../controllers/userController');

const router = express.Router();

router.get(
  '/',
  validateJWT,
  user.getAll,
);

router.get(
  '/:id',
  validateJWT,
  user.getById,
);

router.post(
  '/',
  middleware.validateName,
  middleware.validateEmail,
  middleware.validatePassword,
  user.create,
);

module.exports = router;
