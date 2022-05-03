const errors = {
  titleBlank: '"title" is required',
  contentBlank: '"content" is required',
  categoryIdsBlank: '"categoryIds" is required',
};

const code = 400;

const blank = (value) => (!value);

const validationsPost = (title, content, categoryIds) => {
  switch (true) {
    case blank(title): return { code, message: errors.titleBlank };
    case blank(content): return { code, message: errors.contentBlank };
    case blank(categoryIds): return { code, message: errors.categoryIdsBlank };
    default: return {};
  }
};

module.exports = {
  validationsPost,
};
