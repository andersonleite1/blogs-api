const express = require('express');

const validateJWT = require('../middlewares/auth/validateJWT');
const middleware = require('../middlewares');
const post = require('../controllers/postController');

const router = express.Router();

router.get(
  '/',
  validateJWT,
  post.getAll,
);

router.get(
  '/:id',
  validateJWT,
  post.getById,
);

router.post(
  '/',
  validateJWT,
  middleware.validatePost,
  post.create,
);

module.exports = router;
