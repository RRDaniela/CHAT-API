const User = require('./user.model');

const usersController = {
    getAll: (req, res) => {
        const user = new User();
        user.getAll().then((results) => {
            console.log(results);
            res.send(results);
        });
    },
    create: (name, email, password, role, group) => {
        const user = new User();
        user.createUser(name, email, password, role, group);
        }
    };

module.exports = usersController;
