const router = require('express').Router();
const sessionsController = require('./session.controller');

router.get('/sessions', sessionsController.getAll);

router.post('/sessions', (req, res) => {
    res.send("CREATE SESSION");
})

module.exports = router;
