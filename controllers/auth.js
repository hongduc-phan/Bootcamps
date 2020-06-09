const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middlewares/async');
const bcrypt = require('bcryptjs');
const User = require('../models/User');

exports.register = asyncHandler(async (req, res, next) => {
  const { name, email, password, role } = req.body;

  // Create user
  const user = await User.create({
    name,
    email,
    password: password,
    role,
  });

  // get user
  // var user = new User(req.body);
  // user.hash_password = bcrypt.hashSync(req.body.password, 10);
  // user.password = user.hash_password;
  // // save
  // user.save(function (err, newUser) {
  //   console.log(newUser);
  //   if (err) {
  //     res.json({ code: false, message: 'Error to save' });
  //     return;
  //   }
  //   newUser.hash_password = undefined;
  //   res.json({ message: 'Save ok', data: newUser });
  // });

  // Create token
  const token = user.getSignedJwtToken();

  res.status(200).json({
    success: true,
    token,
  });
});

exports.login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new ErrorResponse('Please provide an email and password', 400));
  }

  const user = await User.findOne({ email }).select('+password');
  console.log(user);
  if (!user) {
    return next(new ErrorResponse('Invalid credentials'), 401);
  }

  const isMatch = await user.matchPassword(password);
  if (!isMatch) {
    return next(new ErrorResponse('Invalid credentials'), 401);
  }

  // Create token
  const token = user.getSignedJwtToken();

  res.status(200).json({
    success: true,
    token,
  });
});
