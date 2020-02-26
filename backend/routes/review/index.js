/**
 *  @swagger
 *  tags:
 *  - name: "review"
 *    description: "리뷰에 관한 API"
 */

/**
 *  @swagger
 *  /review:
 *    post:
 *      tags:
 *      - "review"
 *      summary: "review 등록"
 *      prodeces:
 *      - "application/json"
 *      parameters:
 *      - in: "cookie"
 *        name: "courtFinderJwt"
 *        description: "json web token"
 *        required: true
 *        schema:
 *          type: "strging"
 *      - in: "body"
 *        name: "review-info"
 *        description: "등록할 리뷰 정보"
 *        schema:
 *          type: "object"
 *          properties:
 *            text:
 *              type: string
 *        required: true
 *      responses:
 *        200:
 *          description: "Success\n"
 *          schema:
 *            $ref: "#/definitions/review"
 *        400:
 *          description: "text 내용이 없음"
 *        500:
 *          description: "Internal Server Error"
 */

/**
 *  @swagger
 *  definitions:
 *    review:
 *      type: "object"
 *      properties:
 *        text:
 *          type: string
 */

const express = require('express');
const router = express.Router();
const { register } = require('./review-ctrl');

router.post('/', register);

module.exports = router;