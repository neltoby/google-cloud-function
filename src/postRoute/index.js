const express = require('express');
const postRoute = express.Router()
const token = require('../token')
const authentication = require('../authentication')()
const postController = require('../postController')

/**
 * @swagger
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT  
 *   schemas:
 *       PostFailedResponse:
 *            400:
 *               description: Bad request
 *               $ref: '#/components/schemas/Error'
 *            401:
 *               description: Authorization information is missing or invalid
 *               $ref: '#/components/schemas/Error'  
 *            500:
 *               description: Unexpected error
 *               $ref: '#/components/schemas/Error' 
 *       responses:
 *           '200':
 *               description: User craetes an account
 *               headers:
 *                  token:
 *                      schema:
 *                         type: string 
 *                      description: Bearer token for subsequent calls
 *               content: 
 *                  application/json:
 *                     schema:
 *                        type: object
 *                        properties:
 *                           id:
 *                              type: integer
 *                           fullname: 
 *                              type: string
 *                           email:
 *                               type: string
 *           '404':
 *              description: The resource was not found
 *              $ref: '#/components/schemas/Error' 
 *           '500':
 *              description: Unexpected error
 *              $ref: '#/components/schemas/Error'
 *       Error: 
 *          content:
 *             application/json:
 *                 schema:
 *                     type: object
 *                     properties:
 *                          success:
 *                             type: boolean
 *                          msg: 
 *                             type: string 
 */


/**
 * @swagger
 * /operation/post:
 *     post:
 *         summary: Create post
 *         security:
 *            - bearerAuth: []
 *         requestBody:
 *            description: post string and title in json format
 *            required: true
 *            content:
 *               application/json:
 *                   schema:
 *                      type: object
 *                      properties:
 *                          post:
 *                            type: string
 *                          title:
 *                            type: strin
 *         responses:
 *            '200':
 *               description: Twit was posted successfully
 *               content:
 *                   application/json: 
 *                       schema:
 *                           type: object
 *                           properties:
 *                               id:
 *                                  type: integer
 *                               post:
 *                                  type: integer
 *                               title:
 *                                  type: integer
 *            $ref: '#/components/schemas/PostFailedResponse'           
 */
postRoute.post('/operation/post', authentication.authenticate, authentication.validate, postController.post)


/**
 * @swagger
 * /register:
 *     post:
 *        summary: Creates a new user
 *        requestBody:
 *           description: user data in json
 *           required: true
 *           content:
 *               application/json:
 *                   schema:
 *                      type: object
 *                      properties:
 *                         fullname:
 *                            type: string
 *                         email:
 *                            type: string
 *        responses:
 *           $ref: '#/components/schemas/responses'
 */
postRoute.post('/register', postController.create, token, (req, res) => {
    res.json(req.user)
})

module.exports = postRoute