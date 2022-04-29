const errors = {
  nameLength: '"displayName" length must be at least 8 characters long',
  emailInvalid: '"email" must be a valid email',
  emailBlank: '"email" is required',
  passwordLength: '"password" length must be 6 characters long',
  passwordBlank: '"password" is required',
};

const code = 400;

const blank = (value) => (!value); 
const isLengthLetterThan = (value, min) => (value.length < min);
const isEmailValid = (email) => {
  const atSign = email.indexOf('@');
  if (atSign < 1) return false;

  const dot = email.indexOf('.');
  if (dot <= atSign + 2) return false;
  if (dot === email.length - 1) return false;

  return true;
};

const validationsName = (name) => {
  switch (true) {
    case isLengthLetterThan(name, 8): return { code, message: errors.nameLength };
    default: return {};
  }
};

const validationsEmail = async (email) => {
  switch (true) {
    case blank(email): return { code, message: errors.emailBlank };
    case !isEmailValid(email): return { code, message: errors.emailInvalid };
    default: return {};
  }
};

const validationsPassword = (password) => {
  switch (true) {
    case blank(password): return { code, message: errors.passwordBlank };
    case isLengthLetterThan(password, 6): return { code, message: errors.passwordLength };
    default: return {};
  }
};

module.exports = {
  validationsName,
  validationsEmail,
  validationsPassword,
};
