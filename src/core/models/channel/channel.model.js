const Database = require('../../db')
const User = require('../users/user.model');
const jwt = require("jsonwebtoken");
const { ObjectId } = require('mongodb');

class Channel {

    collection;

    constructor() {
        //Set collection
        this.collection = Database.collection('channel')
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
}
createChannel(title, description, user, users, invited, date){
    return new Promise((accept, reject) => {
        try{
        const inserted = this.collection.insertOne({title:title, description:description, user:user, date:date, users:users, invited:invited});
        accept(inserted);
        }catch(err){
            reject(err);
        }
        })
    }

inviteUser(email, currentUser, channelId){
    return new Promise((resolve, reject) => {
        const user = new User();
        const admin = new User();
        const channel = new Channel();
        user.findOne(email).then((results) => {
        channel.findOne(channelId).then((results) => {
            resolve(results);
        })
        })}
    )}

findOne(id){
    return new Promise((accept, reject)=>{
        this.collection.findOne({"_id": new ObjectId(id)}, function(err, results){
            if(!err){
                accept(results)
            }else{
                reject(err)
            }
        })
    });
}
}

module.exports = Channel;