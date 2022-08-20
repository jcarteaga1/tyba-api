const express = require('express');
const router = express.Router();

const { authMiddleware } = require('../middlewares/auth');
const { getPlaces } = require('../controllers/places')

router.post('/', authMiddleware, getPlaces);

module.exports = router;