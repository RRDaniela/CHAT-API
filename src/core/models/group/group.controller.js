const Group = require('./group.model');

const GroupController = {
    getAll: (req, res) => {
        const group = new Group();
        console.log(group);
        group.getAll().then((results) => {
            res.send(results);
        });
    },
};

console.log(Group);

module.exports = GroupController;
