const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

const { protect } = require('../middlewares/auth');
const {
  getBootcamps,
  createBootcamps,
  modifyBootcamp,
  getBootcampById,
  deleteBootcampById,
} = require('../controllers/bootcamps');

router.route('/').get(getBootcamps).post(protect, createBootcamps);
// router.put('/:id', modifyBootcamp);
router
  .route('/:id')
  .get(getBootcampById)
  .delete(protect, deleteBootcampById)
  .put(protect, modifyBootcamp);

module.exports = router;
