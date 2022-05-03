const { BlogPost, User, Category } = require('../models');

const getAll = async () => {
  const posts = await BlogPost.findAll({
    include: [{
      model: User,
      as: 'user',
      attributes: { exclude: ['password'] },
    },
    {
      model: Category, 
      as: 'categories', 
      through: { attributes: [] },
    }],
  });

  return { code: 200, posts };
};

// partially done
const create = async (title, content, categoryIds) => {
  const data = await BlogPost.create({ title, content, categoryIds });
  return { code: 201, data };
};

module.exports = {
  getAll,
  create,
};
