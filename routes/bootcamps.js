const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

const {
  getBootcamps,
  createBootcamps,
  modifyBootcamp,
  getBootcampById,
} = require('../controllers/bootcamps');

const jsonParser = bodyParser.json();
router.route('/').get(getBootcamps).post(jsonParser, createBootcamps);
router.put('/:id', modifyBootcamp);
router.route('/:id').get(getBootcampById);

module.exports = router;
