const router = require('express').Router();
const groupController = require('./group.controller');
const verify = require("../../verifyToken")

router.get('/group', groupController.getAll);

router.post('/group', (req, res) => {
    res.send("CREATE group");
})

router.get('/group/:id',verify, (req, res) => {
    res.send(req.params.id);
})

module.exports = router;
