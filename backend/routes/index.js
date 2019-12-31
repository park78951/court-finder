const express = require('express');
const router = express.Router();
const courtsRouter = require('./courts');

router.use('/courts', courtsRouter);

module.exports = router;