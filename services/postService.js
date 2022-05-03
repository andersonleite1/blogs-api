const { BlogPost, User, Category } = require('../models');

const errors = {
  notFound: 'Post does not exist',
};

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

const getById = async (id) => {
  const post = await BlogPost.findOne({
    where: { id },
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

  if (!post) return { code: 404, message: errors.notFound };

  return { code: 200, post };
};

// partially done
const create = async (title, content, categoryIds) => {
  const data = await BlogPost.create({ title, content, categoryIds });
  return { code: 201, data };
};

module.exports = {
  getAll,
  getById,
  create,
};
