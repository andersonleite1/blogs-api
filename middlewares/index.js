const validateName = require('./nameMiddleware');
const validateEmail = require('./emailMiddleware');
const validatePassword = require('./passwordMiddleware');
const validateNameCategory = require('./nameCategoryMiddleware');

module.exports = {
  validateName,
  validateEmail,
  validatePassword,
  validateNameCategory,
};
