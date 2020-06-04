const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    msg: 'Show all bootcamps',
  });
});
router.post('/:id', (req, res) => {
  console.log(req.params.id);
  res.status(201).json({
    success: true,
    msg: 'Show all bootcamps',
  });
});

module.exports = router;
