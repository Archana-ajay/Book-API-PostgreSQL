const express = require('express');
const { userRoutes } = require('../modules/user');
const { bookRoutes } = require('../modules/book');
const { authMiddleware } = require('../middlewares');

const router = express.Router();

router.use('/user', userRoutes);
router.use('/books', authMiddleware((allowedRoles = ['USER'])), bookRoutes);

module.exports = router;
