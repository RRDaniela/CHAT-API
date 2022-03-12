const Role = require('./role.model');

const rolesController = {
    getAll: (req, res) => {
        const role = new Role();
        console.log(role);
        role.getAll().then((results) => {
            res.send(results);
        });
    },
};

console.log(Role);

module.exports = rolesController;
