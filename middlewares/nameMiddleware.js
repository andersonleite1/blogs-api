const { validationsName } = require('../schemas/userSchema');

const validateName = (req, res, next) => {
  const { displayName } = req.body;

  const { message, code } = validationsName(displayName);

  if (message) return res.status(code).json({ message });
  next();
};

module.exports = validateName;
