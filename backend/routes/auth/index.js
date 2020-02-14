/**
 *  @swagger
 *  tags:
 *  - name: "auth"
 *    description: "회원 관리에 관한 API"
 */

/**
 *  @swagger
 *  /auth/login:
 *    post:
 *      tags:
 *      - "auth"
 *      summary: "user login"
 *      description: "kakaoId 를 통한 회원 가입 및 로그인"
 *      prodeces:
 *      - "application/json"
 *      parameters:
 *      - in: "body"
 *        name: "body"
 *        description: "로그인을 위한 회원 정보"
 *        schema:
 *          $ref: "#/definitions/User"
 *        required: true
 *      responses:
 *        200:
 *          description: "Success"
 *          schema:
 *            $ref: "#/definitions/User"
 *        400:
 *          description: "page and size should be defined minimum 1"
 *        500:
 *          description: "Internal Server Error"
 */
/**
 *  @swagger
 *  definitions:
 *    User:
 *      type: "object"
 *      properties:
 *        kakaoId:
 *          type: string
 */

const express = require('express');
const router = express.Router();
const { login } = require('./auth-ctrl');

router.post('/login', login);

module.exports = router;