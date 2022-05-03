const express = require('express');

const validateJWT = require('../middlewares/auth/validateJWT');
const middleware = require('../middlewares');
const category = require('../controllers/categoryController');

const router = express.Router();

router.post(
  '/',
  validateJWT,
  middleware.validateNameCategory,
  category.create,
);

module.exports = router;
