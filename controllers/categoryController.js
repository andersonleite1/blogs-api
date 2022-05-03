const Category = require('../services/categoryService');

const create = async (req, res, next) => {
  try {
    const { name } = req.body;

    const { code, data } = await Category.create(name);

    return res.status(code).json(data);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  create,
};
