const router = require('express').Router();
const user = require('./user');
const User = require('./user.model');
const usersController = require('./users.controller');
const jwt = require('jsonwebtoken');
const { redirect } = require('express/lib/response');

/**
 * @swagger
 *  /api/users:
 *      get:
 *          tags:
 *          - Users
 *          description: Get all users
 *          responses:
 *              200: 
 *                  description: Array with a list of users
 *              400:
 *                  description: Couldn't get users.
 *                          
 */

router.get('/users', usersController.getAll);

router.post('/users/register', (req, res) => {
    const user = new User();
    user.findOne(req.body.email).then((results) => {
        if(results==null){
            usersController.create(req.body.name, req.body.email, req.body.password, req.body.role, req.body.group)
            res.status(200).send("User added");
        }else{
            res.send("Email already exists")
        }
    });    
});

router.post('/users/login', async(req, res) => {
    const user = new User();
    user.findOne(req.body.email).then((results) => {
        if(results==null){
        res.send("user doesn't exist");
        }else{
            if(String(results.password) == String(req.body.password)){
                //Create and assign a token
                const token = jwt.sign({_id: results._id}, process.env.TOKEN_SECRET);
                res.header('auth-token', token).send(token);
            }else{
                res.status(400).send("Incorrect password");
            }
        }})
})


module.exports = router;
