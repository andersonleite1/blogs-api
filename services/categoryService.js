const { Category } = require('../models');

const getAll = async () => {
  const categories = await Category.findAll();

  return { code: 200, categories };
};

const create = async (name) => {
  const data = await Category.create({ name });

  return { code: 201, data };
};

module.exports = {
  getAll,
  create,
};
