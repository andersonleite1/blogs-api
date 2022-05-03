require('dotenv').config();
const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const { User } = require('../../models');

const errors = {
  notFound: 'Token not found',
  expiredOrInvalid: 'Expired or invalid token',
};

const code = 401;

module.exports = async (req, res, next) => {
  try {
    const { authorization: token } = req.headers;

    if (!token) return res.status(code).json({ message: errors.notFound });

    let decoded;
    try {
      decoded = jwt.verify(token, secret);
    } catch (err) {
      return res.status(code).json({ message: errors.expiredOrInvalid });
    }

    const user = await User.findOne({ where: { email: decoded.data } });

    if (!user) return res.status(code).json({ message: errors.expiredOrInvalid });

    req.user = user;
    next();
  } catch (err) {
    next(err);
  }
};
