const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const auth = require('./middlewares/auth');
const { requestLogger, errorLogger } = require('./middlewares/logger'); 
const { PORT = 3016 } = process.env;
const app = express();
const { errors } = require('celebrate');

const usersRouter = require('./routes/users');
const cardsRouter = require('./routes/cards');
const { login, createUser } = require('./controllers/users');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost:27017/aroundb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});


app.use(requestLogger);

app.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('Server will crash now');
  }, 0);
}); 

app.post('/signin', login);
app.post('/signup', createUser);
app.use('/users', auth, usersRouter);
app.use('/cards', auth, cardsRouter);
app.get('*', (req, res) => {
  res.status(404).send({ message: "Requested resource not found" });
})

app.use(errorLogger);

app.use(errors());

app.use((err, req, res, next) => {
  const { statusCode = 500, message } = err;
  res
    .status(statusCode)
    .send({
      message: statusCode === 500
        ? 'An error occurred on the server'
        : message
    });
}); 

app.listen(PORT, () => {
  console.log(`App listening at port ${PORT}`)
});