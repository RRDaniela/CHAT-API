const router = require('express').Router();
const rolesController = require('./role.controller');

router.get('/roles', rolesController.getAll);

router.post('/roles', (req, res) => {
    res.send("CREATE ROLE");
})

module.exports = router;
