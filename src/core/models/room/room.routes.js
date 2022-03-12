const router = require('express').Router();
const roomsController = require('./room.controller');

router.get('/rooms', roomsController.getAll);

router.post('/rooms', (req, res) => {
    res.send("CREATE ROOM");
})

module.exports = router;
