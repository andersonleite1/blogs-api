const Post = require('../services/postService');

const getAll = async (_req, res, next) => {
  try {
    const { code, posts } = await Post.getAll();

    return res.status(code).json(posts);
  } catch (err) {
    next(err);
  }
};

const getById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const { code, message, post } = await Post.getById(id);

    if (message) return res.status(code).json({ message });

    return res.status(code).json(post);
  } catch (err) {
    next(err);
  }
};

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
  getAll,
  getById,
  create,
};
