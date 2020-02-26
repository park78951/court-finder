const express = require('express');
const router = express.Router();
const courtsRouter = require('./courts');
const authRouter = require('./auth');
const reviewRouter = require('./review');

router.use('/courts', courtsRouter);
router.use('/auth', authRouter);
router.use('/review', reviewRouter);

module.exports = router;