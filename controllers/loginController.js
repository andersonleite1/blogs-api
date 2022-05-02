const User = require('../services/userService');

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const { code, message, token } = await User.login(email, password);

    if (message) return res.status(code).json({ message });

    return res.status(code).json({ token });
  } catch (err) {
    next(err); 
  }
};

module.exports = login;
