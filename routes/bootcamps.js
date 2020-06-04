const express = require('express');
const router = express.Router();

const {
  getBootcamps,
  createBootcamps,
  modifyBootcamp,
} = require('../controllers/bootcamps');

router.route('/').get(getBootcamps).post(createBootcamps);
router.put('/:id', modifyBootcamp);

module.exports = router;
