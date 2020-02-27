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
 *      - in: "query"
 *        name: "courtId"
 *        description: "리뷰를 등록할 court id"
 *        required: true
 *        schema:
 *          type: "strging"
 *      - in: "body"
 *        name: "reviewInfo"
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
 *          description: "text 내용이 없거나 courtId가 쿼리에 없음"
 *        401:
 *          description: "unauthorized, jwt가 없거나 잘못됨"
 *        500:
 *          description: "Internal Server Error"
 */

/**
 *  @swagger
 *  definitions:
 *    review:
 *      type: "object"
 *      properties:
 *        id:
 *          type: number
 *        text:
 *          type: string
 */

const express = require('express');
const router = express.Router();
const { register } = require('./review-ctrl');
const isLoggedIn = require('../../middlewares/is-logged-in');

router.post('/', isLoggedIn, register);

module.exports = router;