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
    const { body: { title, content, categoryIds }, user: { id } } = req;

    const { code, message, postCreated } = await Post.create(title, content, categoryIds, id);

    if (message) return res.status(code).json({ message });

  return res.status(code).json(postCreated);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAll,
  getById,
  create,
};
