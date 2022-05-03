const { validationsNameCategory } = require('../schemas/categorySchema');

const validateName = (req, res, next) => {
  const { name } = req.body;

  const { message, code } = validationsNameCategory(name);

  if (message) return res.status(code).json({ message });
  next();
};

module.exports = validateName;
