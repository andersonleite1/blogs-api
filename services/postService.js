const { BlogPost, User, Category } = require('../models');

const errors = {
  notFound: 'Post does not exist',
  categoryNotFound: '"categoryIds" not found',
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

const existCategory = async (categories) => {
  console.log(categories);
  const categoriesAll = await Category.findAll();
  console.log(categoriesAll);
  
};

const create = async (title, content, categoryIds, id) => {
  await existCategory(categoryIds);
  const data = await BlogPost.create({ 
    title,
    content,
    categoryIds,
    published: new Date(),
    updated: new Date(),
    userId: id,
  });

  const postCreated = {
    id: data.id,
    userId: data.userId,
    title: data.title,
    content: data.content,
  };

  return { code: 201, postCreated };
};

module.exports = {
  getAll,
  getById,
  create,
};
