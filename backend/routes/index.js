const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  return res.send({ status: 'succe2ss' });
});

module.exports = router;