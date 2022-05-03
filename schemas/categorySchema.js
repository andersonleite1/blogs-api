const errors = {
  nameBlank: '"name" is required',
};

const code = 400;

const blank = (value) => (!value);

const validationsNameCategory = (name) => {
  switch (true) {
    case blank(name): return { code, message: errors.nameBlank };
    default: return {};
  }
};

module.exports = {
  validationsNameCategory,
};
