const { validationsPost } = require('../schemas/postSchema');

const validatePost = (req, res, next) => {
  const { title, content, categoryIds } = req.body;

  const { message, code } = validationsPost(title, content, categoryIds);

  if (message) return res.status(code).json({ message });
  next();
};

module.exports = validatePost;
