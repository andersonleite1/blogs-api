const { Category } = require('../models');

const create = async (name) => {
  const data = await Category.create({ name });

  return { code: 201, data };
};

module.exports = {
  create,
};
