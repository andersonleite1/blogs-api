const User = require('../services/userService');

const create = async (req, res, next) => {
  try {
    const { displayName, email, password, image } = req.body;
    
    const { code, message, token } = await User.create(displayName, email, password, image);

    if (message) return res.status(code).json({ message });

    return res.status(code).json({ token });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  create,
};
