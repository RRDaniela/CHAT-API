const router = require('express').Router();
const channelController = require('./channel.controller');
const verify = require("../../verifyToken");
const Channel = require('./channel');

router.get('/channel', channelController.getAll);


router.post('/channel', verify, (req, res) => {
    const user = req.user._id;
    channelController.create(user,req.body)
    res.send('Channel created');
})

router.post('/channel/invite/:id', verify, channelController.invite);

module.exports = router;
