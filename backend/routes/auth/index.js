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
 *      description: "kakaoId 를 통한 회원 가입 및 로그인\n 아직 등록안된 회원이면 kakaoNickname으로 자동 회원 가입"
 *      prodeces:
 *      - "application/json"
 *      parameters:
 *      - in: "body"
 *        name: "body"
 *        description: "로그인을 위한 회원 정보"
 *        schema:
 *          type: "object"
 *          properties:
 *            kakaoId:
 *              type: string
 *            kakaoNickname:
 *              type: string
 *        required: true
 *      responses:
 *        200:
 *          description: "Success\n token이 cookie로 전달됨"
 *          schema:
 *            $ref: "#/definitions/User"
 *        400:
 *          description: "kakaoId 혹은 kakaoNickname이 없음"
 *        500:
 *          description: "Internal Server Error"
 */

 /**
 *  @swagger
 *  /auth/logout:
 *    post:
 *      tags:
 *      - "auth"
 *      summary: "user logout"
 *      description: "쿠키에서 토큰 삭제"
 *      prodeces:
 *      - "application/json"
 *      responses:
 *        200:
 *          description: "Success\n"
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
 *        nickname:
 *          type: string
 */

const express = require('express');
const router = express.Router();
const { login, logout } = require('./auth-ctrl');

router.post('/login', login);
router.post('/logout', logout);

module.exports = router;