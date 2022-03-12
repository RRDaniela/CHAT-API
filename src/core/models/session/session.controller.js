const Session = require('./session.model');

const sessionsController = {
    getAll: (req, res) => {
        const session = new Session();
        console.log(session);
        session.getAll().then((results) => {
            res.send(results);
        });
    },
};

console.log(Session);

module.exports = sessionsController;
