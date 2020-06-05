const Bootcamps = require('../models/Bootcamps');
const ErrorResponse = require('../utils/errorResponse');

// Get all
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

// get 1 bootcamp by id
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
    next(
      new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404)
    );
    // res.status(400).json({
    //   success: false,
    //   error: error.message,
    // });
  }
};

// Create new botcamp
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

// Put = modify exist 1 bootcamp by Id
exports.modifyBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamps.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!bootcamp) {
      return res.status(400).json({
        success: false,
        error: 'do not have bootcamp which has same id',
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

// Delete 1 exist bootcamp by Id
exports.deleteBootcampById = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamps.findByIdAndDelete(req.params.id);
    if (!bootcamp) {
      return res.status(400).json({
        success: false,
        error: 'do not have bootcamp which has same id',
      });
    }
    const bootcamps = await Bootcamps.find();
    res.status(200).json({
      success: true,
      data: bootcamps,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};
