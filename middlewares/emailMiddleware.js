const { validationsEmail } = require('../schemas/userSchema');

const validateEmail = async (req, res, next) => {
  const { email } = req.body;

  const { message, code } = await validationsEmail(email);

  if (message) return res.status(code).json({ message });
  next();
};

module.exports = validateEmail;
