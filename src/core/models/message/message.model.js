const Database = require('../../db')
const Channel = require('../channel/channel.model');


class Message {

    collection;

    constructor() {
        //Set collection
        this.collection = Database.collection('message')
    }

    getAll(){
        return new Promise((accept, reject)=>{
            this.collection.find().toArray((err, results) => {
                if(err){
                    reject(err);
                }else{
                    accept(results);
                }
            });
        });
        /*SIMULAR PROMESA
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve([]); //Mock data
            }, 1000);
        });*/
}
    newMessage(user, message, channelId){
        return new Promise((accept, reject) => {
            let date = new Date();
            date = String(date.getDate()+'/'+(date.getMonth()+1)+'/'+date.getFullYear())
            const channel= new Channel();
            channel.channelMessage(user, date, message, channelId)
            this.collection.insertOne({user:user, message:message, date, channelId});
            accept("Created");
        })
    }

}

module.exports = Message;