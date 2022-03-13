const Message = require('./message.model');

const messagesController = {
    getAll: (req, res) => {
        const message = new Message();
        console.log(message);
        message.getAll().then((results) => {
            res.send(results);
        });
    },
    create: (req, res) => {
        const message = new Message();
        message.newMessage(req.user._id, req.body.message, req.params.id).then((results) => {
            res.send(results);
        })
    }
};

console.log(Message);

module.exports = messagesController;
