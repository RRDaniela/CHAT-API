const router = require('express').Router();
const usergroupsController = require('./usergroup.controller');

/**
 * @swagger
 *  /api/usergroup:
 *      get:
 *          tags:
 *          - Usergroup
 *          description: Get all usergroup
 *          responses:
 *              200: 
 *                  description: Array with a list of usergroups
 *              400:
 *                  description: Couldn't get usergroup
 *                          
 */

router.get('/usergroup', usergroupsController.getAll);

router.post('/usergroup', (req, res) => {
    res.send("CREATE USER GROUP");
})

module.exports = router;
