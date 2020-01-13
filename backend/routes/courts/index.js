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
 *      - in: "body"
 *        name: "options"
 *        description: "코트 검색 조건"
 *        required: true
 *        schema:
 *          type: "object"
 *          properties:
 *            page:
 *              type: number
 *            size:
 *              type: number
 *            query:
 *              type: object
 *              properties:
 *                match:
 *                  type: string
 *                filter:
 *                  type: object
 *                  properties:
 *                    city:
 *                      type: string
 *                    district:
 *                      type: string        
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
const { search } = require('./courts-ctrl');

router.post('/search', search);

module.exports = router;