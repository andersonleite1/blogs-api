const Post = require('../services/postService');

const create = async (req, res, next) => {
  try {
    const { title, content, categoryIds } = req.body;

  const { code, message, data } = await Post.create(title, content, categoryIds);

  if (message) return res.status(code).json({ message });

  return res.status(code).json(data);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  create,
};
