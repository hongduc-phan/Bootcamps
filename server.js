const express = require('express');
const dotenv = require('dotenv');

const connDB = require('./config/db');
// Load env vars
dotenv.config({
  path: './config/config.env',
});

// conenct DB
connDB();

const bootcamps = require('./routes/bootcamps');

const app = express();
const middleware = (req, res, next) => {
  req.hello = 'Duc Phan hello';
  console.log('111');
  next();
};
if (process.env.NODE_ENV === 'development') app.use(middleware);

// Mount routers
app.use('/api/v1/bootcamps', bootcamps);
const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {});

// hadle unhandled rejection
process.on('unhandledRejection', (err, promise) => {
  console.error(err.message);
  console.error(promise);
  server.close(() => process.exit(1));
});
