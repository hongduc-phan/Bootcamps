const Bootcamps = require('../models/Bootcamps');

exports.getBootcamps = async (req, res, next) => {
  try {
    const bootcamps = await Bootcamps.find();
    if (!bootcamps) {
      res.status(400).json({
        success: false,
        error: 'do not have data',
      });
    } else {
      res.status(200).json({
        success: true,
        data: bootcamps,
      });
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

exports.getBootcampById = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamps.findById(req.params.id);
    if (!bootcamp) {
      return res.status(400).json({
        success: false,
        error: 'do not have data',
      });
    }
    res.status(200).json({
      success: true,
      data: bootcamp,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

exports.createBootcamps = async (req, res, next) => {
  console.log(Bootcamps);
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
