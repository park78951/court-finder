const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const sequelize = require('./models').sequelize;
const router = require('./routes');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./src/swagger/swagger-definition');

const app = express();
sequelize.sync();

if (process.env.NODE_ENV === 'production') {
  app.use(mrgan('combined'));
} else {
  const cors = require('cors');
  app.use(cors());
  app.use(logger('dev'));
}

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', router);
// catch 404 and redirect to home
app.use(function(req, res, next) {
  res.redirect('/');
});

// error handler
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.send(err)
});

module.exports = app;
