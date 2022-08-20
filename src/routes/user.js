const express = require('express');
const router = express.Router();

const { createUser } = require('../controllers/user')

//router.post('/login', loginUser);
router.post('/singup', createUser);

module.exports = router;