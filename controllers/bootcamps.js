const Bootcamps = require('../models/Bootcamps');

exports.getBootcamps = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: 'Show all bootcamps',
  });
};

exports.createBootcamps = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamps.create(req.body);
    res.status(201).json({
      success: true,
      data: bootcamp,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

exports.modifyBootcamp = (req, res, next) => {
  console.log(req.params.id);
  res.status(202).json({
    success: true,
    msg: 'modify bootcamp',
  });
};
