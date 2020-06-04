const express = require('express');
const dotenv = require('dotenv');
const bootcamps = require('./routes/bootcamps');
// Load env vars
dotenv.config({
  path: './config/config.env',
});

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
app.listen(PORT, () => {});
