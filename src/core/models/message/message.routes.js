const router = require('express').Router();
const verify = require("../../verifyToken");

const messageController = require('./message.controller');

router.get('/message', messageController.getAll);

router.post('/message/:id', verify, messageController.create);

module.exports = router;
