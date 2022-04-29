const validateName = require('./nameMiddleware');
const validateEmail = require('./emailMiddleware');
const validatePassword = require('./passwordMiddleware');

module.exports = {
  validateName,
  validateEmail,
  validatePassword,
};
