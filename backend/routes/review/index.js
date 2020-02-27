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
 *    get:
 *      tags:
 *      - "review"
 *      summary: "코트에 대한 리뷰들 읽어오기"
 *      description: "코트에 대한 리뷰들 읽어오기"
 *      prodeces:
 *      - "application/json"
 *      parameters:
 *      - in: "query"
 *        name: "page"
 *        description: "최소 1 이상의 값이어야 합니다."
 *        type: number
 *        required: true
 *      - in: "query"
 *        name: "size"
 *        description: "최소 1 이상의 값이어야 합니다."
 *        type: number
 *        required: true
 *      - in: "query"
 *        name: "courtId"
 *        description: "리뷰를 가져올 court id"
 *        type: string
 *        required: true
 *      responses:
 *        200:
 *          description: "Success"
 *          schema:
 *            type: "object"
 *            properties:
 *              hasNextPage:
 *                type: boolean
 *              writer:
 *                $ref: "#/definitions/writer"
 *              reviews:
 *                type: array
 *                items:
 *                  $ref: "#/definitions/review"
 *        204:
 *          description: "No content"
 *        400:
 *          description: "Bad request\n page 는 최소 1, size는 최소 1, court id 필요"
 *        500:
 *          description: "Internal Server Error"
 */

 /**
 *  @swagger
 *  /review/mine:
 *    get:
 *      tags:
 *      - "review"
 *      summary: "court에 대해 유저 본인이 작성한 리뷰"
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
 *        description: "리뷰를 가져올 court id"
 *        required: true
 *        schema:
 *          type: "strging"
 *      responses:
 *        200:
 *          description: "Success\ncreatedAt example: '2020-02-27T03:57:44.000Z'"
 *          schema:
 *            $ref: "#/definitions/review"
 *        204:
 *          description: "작성한 리뷰가 없음"
 *        400:
 *          description: "courtId가 쿼리에 없음"
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
 *        createdAt:
 *          type: string
 *    writer:
 *      type: "object"
 *      properties:
 *        nickname:
 *          type: string
 */

const express = require('express');
const router = express.Router();
const isLoggedIn = require('../../middlewares/is-logged-in');
const {
  register,
  getMyReview
} = require('./review-ctrl');

router.get('/mine', isLoggedIn, getMyReview);
router.post('/', isLoggedIn, register);

module.exports = router;