const login = require('./loginRoutes');
const user = require('./userRoutes');
const categories = require('./categoriesRoutes');
const post = require('./postRoutes');

module.exports = {
  login,
  user,
  categories,
  post,
};
