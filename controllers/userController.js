const User = require('../services/userService');

const getAll = async (req, res, next) => {
  try {
    const { code, users } = await User.getAll();
    return res.status(code).json(users);
  } catch (err) {
    next(err);
  }
};

const getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { code, message, user } = await User.getById(id);

    if (message) return res.status(code).json({ message });

    return res.status(code).json(user);
  } catch (err) {
    next(err);
  }
};

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
  getAll,
  getById,
  create,
};
