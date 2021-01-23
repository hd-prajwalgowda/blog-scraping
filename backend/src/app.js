const compression = require('compression');
const express = require('express');
const cors = require('cors');
const config = require('./config/config');

const helmet = require('helmet');
const morgan = require('./config/morgan');
const handleError = require('./middleware/error');
const status = require('http-status');
const { APIError } = require('./utils/ErrorHandler');
const catchAsync = require('./utils/catchAsync');
const router = require('./routes/index');
const { auth } = require('./middleware/auth');

const app = express();

if (config.env !== 'test') {
  app.use(morgan.successHandler);
  app.use(morgan.errorHandler);
}

app.use(helmet());

app.use(require('body-parser').urlencoded({ extended: true }));
app.use(require('body-parser').json());

// app.enable('trust proxy');
// app.use(mongoSanitize());

app.use(compression());
app.use(cors());
app.options('*', cors());

app.get('/testauth/:slug', auth, (req, res) => {
  console.log(req.params);
  res.json({
    key: 'value',
    key2: 'value',
    key3: 'value',
    key4: 'value',
  });
});

app.use('/', router);

app.use((req, res, next) => {
  next(new APIError(status.NOT_FOUND, 'Not found'));
});

app.use((err, req, res, next) => {
  handleError(err, res);
  next();
});

module.exports = app;
