const Channel = require('./channel.model');
const verify = require("../../verifyToken");


const channelController = {
    getAll: (req, res) => {
        const channel = new Channel();
        channel.getAll().then((results) => {
            res.send(results);
        });
    },
    create: (user, data, req, res) => {
    const channel = new Channel();
    date = new Date();
    date = String(date.getDate()+'/'+(date.getMonth()+1)+'/'+date.getFullYear())
    channel.createChannel(data.title, data.description, user, data.users, data.invited, date).then((results) => {
        console.log(results)
        return results;
    })    
    },
    invite: (req, res) => {
        const channel = new Channel();
        channel.inviteUser(req.body.email, req.user._id, req.params.id).then((results) => {
            if(results==null){
                res.send("No user")
            }else{
                res.send(results)
            }
    })}
};

module.exports = channelController;
