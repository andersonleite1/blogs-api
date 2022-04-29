const categories = {
  as: 'categories',
  through: 'PostsCategories',
  foreignKey: 'postId',
  otherKey: 'categoryId',
};

const posts = {
  as: 'posts',
  through: 'PostsCategories',
  foreignKey: 'categoryId',
  otherKey: 'postId',
};

module.exports = (sequelize, DataTypes) => {
  const PostsCategory = sequelize.define('PostsCategory', {
    postId: { allowNull: false,
      type: DataTypes.INTEGER,
      foreignKey: true,
      references: { model: 'BlogPosts', key: 'id' },
    },
    categoryId: { allowNull: false,
      type: DataTypes.INTEGER,
      foreignKey: true,
      references: { model: 'Categories', key: 'id' },
    },
  },
  { timestamps: false, tableName: 'PostCategories' });

  PostsCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, categories);
    models.Category.belongsToMany(models.BlogPost, posts);
  };

  return PostsCategory;
};
