const Room = require('./room.model');

const roomsController = {
    getAll: (req, res) => {
        const room = new Room();
        console.log(room);
        room.getAll().then((results) => {
            res.send(results);
        });
    },
};

console.log(Room);

module.exports = roomsController;
