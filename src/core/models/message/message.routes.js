const router = require('express').Router();
const messageController = require('./message.controller');

router.get('/message', messageController.getAll);

router.post('/message', (req, res) => {
    res.send("CREATE MESSAGE");
})

module.exports = router;
