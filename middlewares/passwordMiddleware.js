const { validationsPassword } = require('../schemas/userSchema');

const validatePassword = (req, res, next) => {
  const { password } = req.body;

  const { message, code } = validationsPassword(password);

  if (message) return res.status(code).json({ message });
  next();
};

module.exports = validatePassword;
