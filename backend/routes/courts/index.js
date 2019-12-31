/**
 *  @swagger
 *  tags:
 *  - name: "courts"
 *    description: "코트에 관한 모든 API"
 */

const express = require('express');
const router = express.Router();
const { search } = require('./courts-ctrl');

router.get('/search', search);

module.exports = router;