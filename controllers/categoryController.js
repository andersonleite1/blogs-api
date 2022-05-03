const Category = require('../services/categoryService');

const getAll = async (req, res, next) => {
  try {
    const { code, categories } = await Category.getAll();

    return res.status(code).json(categories);
  } catch (err) {
    next(err);
  }
};

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
  getAll,
  create,
};
