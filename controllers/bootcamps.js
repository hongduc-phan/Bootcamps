exports.getBootcamps = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: 'Show all bootcamps',
  });
};

exports.createBootcamps = (req, res, next) => {
  console.log('controller');
  res.status(201).json({
    success: true,
    msg: 'create bootcamp',
  });
};

exports.modifyBootcamp = (req, res, next) => {
  console.log(req.params.id);
  res.status(202).json({
    success: true,
    msg: 'modify bootcamp',
  });
};
