const express = require('express');

const router = require('./routes');

const app = express();

app.use(express.json());

app.use(
  '/login',
  router.login,
);

app.use(
  '/user',
  router.user,
);

app.use(
  '/categories',
  router.categories,
);

app.use(
  '/post',
  router.post,
);

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});
