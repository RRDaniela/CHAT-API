const router = require('express').Router();
const channelController = require('./channel.controller');
const verify = require("../../verifyToken");
const Channel = require('./channel');
const { redirect } = require('express/lib/response');


/**
 * @swagger
 *  /api/channel:
 *      get:
 *          tags:
 *          - Channel
 *          description: Get all channel
 *          responses:
 *              200: 
 *                  description: Array with a list of channels
 *              400:
 *                  description: Couldn't get channel
 * /api/channel/create:
 *  post:
 *      content:
 *          - application/json
 *      parameters:
 *         - in: body
 *           name: Channel
 *           schema: 
 *              $ref: '#/definitions/Channel'
 *      tags:
 *      - Channel
 *      description: Create a channel
 *      responses:
 *          200:
 *              description: OK
 *          400:
 *              description: Err! Couldn't create channel
 * definitions:
 *  Channel:
 *      type: object
 *      required:
 *       title:
 *          type: string
 *       description:
 *          type: string
 *       users:
 *          type: string
 *       invited:
 *          type: string
 *      example:
 *          title: Disco 2000
 *          description: Fingers 
 *          users: []
 *          invited: []
 * /api/channel/invite/622d3b4d4b89169f8b219bb7:
 *  post:
 *      content:
 *          - application/json
 *      parameters:
 *         - in: body
 *           name: Invited
 *           schema: 
 *              $ref: '#/url/Invited'
 *      tags:
 *      - Channel
 *      description: Invite to channel
 *      responses:
 *          200:
 *              description: OK
 *          400:
 *              description: Err! Couldn't invite
 * url:
 *  Invited:
 *      type: object
 *      required:
 *      - email:
 *          type: string
 *      - channelId:
 *          type: string
 *      - current:
 *          type: string
 *      example:
 *          email: julia@email.com
 *          channelId: 622d3b4d4b89169f8b219bb7
 *          current: 622d3b4d4b89169f8b219bb7
 * /api/channel/622d3b4d4b89169f8b219bb7:
 *  post:
 *      content:
 *          - application/json
 *      parameters:
 *         - in: body
 *           name: Channel
 *           schema: 
 *              $ref: '#/define/Channel2'
 *      tags:
 *      - Channel
 *      description: Join a channel
 *      responses:
 *          200:
 *              description: OK
 *          400:
 *              description: Err! Couldn't join channel
 * define:
 *  Channel2:
 *      type: object
 *      required:
 *      - channelId:
 *          type: string
 *      - user:
 *          type: string
 *      example:
 *          channelId: 622d3b4d4b89169f8b219bb7
 *          user: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjJkMzU0OGQ5MThkMWRjZDYyNDZhYmMiLCJpYXQiOjE2NDcxMjk5NTN9.dx4BMF9Okiwq6Xs6Mr49RmMJobw-VPIBa5AwVnRGob4 
 */

router.get('/channel', channelController.getAll);


router.post('/channel/create', verify, (req, res) => {
    const user = req.user._id;
    channelController.create(user,req.body)
    res.send('Channel created');
})

router.post('/channel/invite/:id', verify, channelController.invite);

router.get('/channel/:id', verify, channelController.join);

module.exports = router;
