const Message = require('./message.model');

const messagesController = {
    getAll: (req, res) => {
        const message = new Message();
        console.log(message);
        message.getAll().then((results) => {
            res.send(results);
        });
    },
};

console.log(Message);

module.exports = messagesController;
