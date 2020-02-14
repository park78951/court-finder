const express = require('express');
const router = express.Router();
const courtsRouter = require('./courts');
const authRouter = require('./auth');

router.use('/courts', courtsRouter);
router.use('/auth', authRouter);

module.exports = router;