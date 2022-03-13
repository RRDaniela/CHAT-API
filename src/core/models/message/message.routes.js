const router = require('express').Router();
const verify = require("../../verifyToken");

const messageController = require('./message.controller');

/**
 * @swagger
 * /api/message:
 *      get:
 *          tags:
 *          - Messages
 *          description: Get all messages
 *          responses:
 *              200: 
 *                  description: Array with a list of messages
 *              400:
 *                  description: Couldn't get messages.
 * /api/Message/create:
 *  post:
 *      content:
 *          - application/json
 *      parameters:
 *         - in: body
 *           name: Message
 *           schema: 
 *              $ref: '#/definitions/Message'
 *      tags:
 *      - Messages
 *      description: Create a Message
 *      responses:
 *          200:
 *              description: OK
 *          400:
 *              description: Err! Couldn't create Message
 * definitions:
 *  Message:
 *      type: object
 *      required:
 *       message:
 *          type: string
 *      example:
 *          message: Buenas
 */
router.get('/message', messageController.getAll);

router.post('/message/:id', verify, messageController.create);

module.exports = router;
