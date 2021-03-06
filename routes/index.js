const express = require('express');
const userRoutes = require('./user');

const router = express.Router(); // eslint-disable-line new-cap

// mount user routes at /users
router.use('/users', userRoutes);

module.exports = router;
