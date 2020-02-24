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
 *        409:
 *          description: "kakao nickname이 중복됨"
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
 *  /auth/validate/conflict/nickname/{nickname}:
 *    get:
 *      tags:
 *      - "auth"
 *      summary: "nickname 중복 검사"
 *      description: "이미 존재하는 nickname인지 확인한다."
 *      prodeces:
 *      - "application/json"
 *      parameters:
 *      - in: "path"
 *        name: "nickname"
 *        description: "중복 검사할 닉네임"
 *        schema:
 *          type: "string"
 *        required: true
 *      responses:
 *        200:
 *          description: "Success\n"
 *          schema:
 *            type: "object"
 *            properties:
 *              isConflict:
 *                type: boolean
 *        400:
 *          description: "nickname이 없음"
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
const { login, logout, validateNicknameConflict } = require('./auth-ctrl');

router.post('/login', login);
router.post('/logout', logout);
router.get('/validate/conflict/nickname/:nickname', validateNicknameConflict);

module.exports = router;