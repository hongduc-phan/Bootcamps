const Bootcamps = require('../models/Bootcamps');
const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middlewares/async');

// Get all
exports.getBootcamps = asyncHandler(async (req, res, next) => {
  const bootcamps = await Bootcamps.find();
  res.status(200).json({
    success: true,
    data: bootcamps,
  });
});

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
exports.createBootcamps = asyncHandler(async (req, res, next) => {
  console.log(Bootcamps);
  const bootcamp = await Bootcamps.create(req.body);
  res.status(201).json({
    success: true,
    data: bootcamp,
  });
});

// Put = modify exist 1 bootcamp by Id
exports.modifyBootcamp = asyncHandler(async (req, res, next) => {
  const bootcamp = await Bootcamps.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
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
});

// Delete 1 exist bootcamp by Id
exports.deleteBootcampById = asyncHandler(async (req, res, next) => {
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
});
