const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const sequelize = require('./models').sequelize;
const router = require('./routes');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./src/swagger/swagger-definition');
const cors = require('cors');
const app = express();
const decodeJWT = require('./middlewares/decode-jwt');
const renewJWT = require('./middlewares/renew-jwt');

dotenv.config({ path: path.join(__dirname, '../../.env') });
sequelize.sync();

if (process.env.NODE_ENV === 'production') {
  app.use(logger('combined'));
} else {
  app.use(logger('dev'));
}

app.use(cors({
    origin: 'http://localhost:8080',
    credentials: true
}));
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(decodeJWT);
app.use(renewJWT);
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api', router);

// catch 404 and redirect to home
app.use(function(req, res, next) {
  res.status(404).send();
});

// error handler
app.use(function(err, req, res, next) {
  console.log(err);
  res.status(err.status || 500);
  res.send(err)
});

module.exports = app;