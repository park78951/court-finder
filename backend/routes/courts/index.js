/**
 *  @swagger
 *  tags:
 *  - name: "courts"
 *    description: "코트에 관한 모든 API"
 */

/**
 *  @swagger
 *  /courts/search:
 *    post:
 *      tags:
 *      - "courts"
 *      summary: "search courts"
 *      description: "조건에 맞는 court list 를 가져오는 api"
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
 *        name: "match"
 *        description: "검색어"
 *        type: string
 *      - in: "query"
 *        name: "city"
 *        description: "필터링할 도시 이름"
 *        type: string
 *      - in: "query"
 *        name: "district"
 *        description: "필터링할 군/구 이름"
 *        type: string
 *      responses:
 *        200:
 *          description: "Success"
 *          schema:
 *            type: "object"
 *            properties:
 *              totalCount:
 *                type: number
 *              courts:
 *                type: array
 *                items:
 *                  $ref: "#/definitions/Court"
 *        400:
 *          description: "page and size should be defined minimum 1"
 *        500:
 *          description: "Internal Server Error"
 */
/**
 *  @swagger
 *  /courts/{id}:
 *    get:
 *      tags:
 *      - "courts"
 *      summary: "get a court info with id of court"
 *      prodeces:
 *      - "application/json"
 *      parameters:
 *      - in: "path"
 *        name: "id"
 *        description: "court 의 id"
 *        type: string
 *        required: true
 *      responses:
 *        200:
 *          description: "Success"
 *          schema:
 *            $ref: "#/definitions/Court"
 *        204:
 *          description: "해당 아이디를 가진 court가 없습니다."
 *        400:
 *          description: "id parameter가 없습니다"
 *        500:
 *          description: "Internal Server Error"
 */
/**
 *  @swagger
 *  definitions:
 *    Court:
 *      type: "object"
 *      properties:
 *        id:
 *          type: number
 *        name:
 *          type: string
 *        latitude:
 *          type: number
 *        longitude:
 *          type: number
 *        city:
 *          type: string
 *        district:
 *          type: string
 *        address:
 *          type: string
 *        isIndoor:
 *          type: boolean
 *        numberOfCourts:
 *          type: number
 *        web:
 *          type: string
 *        parkingLot:
 *          type: string
 *        phone:
 *          type: string
 */

const express = require('express');
const router = express.Router();
const { search, readCourt } = require('./courts-ctrl');

router.get('/:id', readCourt);
router.post('/search', search);

module.exports = router;