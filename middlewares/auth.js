const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middlewares/async');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Protect routes
exports.protect = asyncHandler(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  }

  // Make sure token exists
  if (!token) {
    return next(new ErrorResponse('Not autorize to access this route', 401));
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log('decoded');
    req.user = await User.findById(decoded.id);
    next();
  } catch (err) {
    return next(new ErrorResponse(err.message, 401));
  }
});
