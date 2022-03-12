const Usergroup = require('./usergroup.model');

const usergroupsController = {
    getAll: (req, res) => {
        const usergroup = new Usergroup();
        console.log(usergroup);
        usergroup.getAll().then((results) => {
            res.send(results);
        });
    },
};

console.log(Usergroup);

module.exports = usergroupsController;
