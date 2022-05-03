require('dotenv').config();
const jwt = require('jsonwebtoken');
const jwtConfig = require('../config/jwtConfig');
const { User } = require('../models');

const secret = process.env.JWT_SECRET;

const errors = {
  fieldsInvalid: 'Invalid fields',
  existUser: 'User already registered',
  notExist: 'User does not exist',
};

const login = async (email, password) => {
  const user = await User.findOne({ where: { email, password } });

  if (!user) return { code: 400, message: errors.fieldsInvalid };

  const token = jwt.sign({ data: email }, secret, jwtConfig);

  return { code: 200, token };
};

const getAll = async () => {
  const users = await User.findAll();
  return { code: 200, users };
};

const getById = async (id) => {
  const user = await User.findOne({ where: { id } });

  if (!user) return { code: 404, message: errors.notExist };

  return { code: 200, user };
}; 

const create = async (displayName, email, password, image) => {
  const data = await User.findOne({ where: { email } });

  if (data) return { code: 409, message: errors.existUser };

  await User.create({ displayName, email, password, image });

  const token = jwt.sign({ data: email }, secret, jwtConfig);
  return { code: 201, token };
};

module.exports = {
  login,
  getAll,
  getById,
  create,
};
