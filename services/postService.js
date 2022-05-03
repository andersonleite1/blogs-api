const { BlogPost } = require('../models');

// partially done
const create = async (title, content, categoryIds) => {
  const data = await BlogPost.create({ title, content, categoryIds });
  return { code: 201, data };
};

module.exports = {
  create,
};
