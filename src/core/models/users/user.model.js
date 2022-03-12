const res = require('express/lib/response');
const Database = require('../../db');
const { create } = require('./user');

class User {

    collection;

    constructor() {
        //Set collection
        this.collection = Database.collection('users')
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
    createUser(name, email, password, role, group){
        try{
            this.collection.insertOne({name:name, email:email, password:password, role:role, group:group});
        }catch(err){
            console.log(err);
        }
        }
    findOne(email){
        return new Promise((accept, reject)=>{
            let user = this.collection.findOne({email:email});
            if(user!=null){
                accept(user);
            }else{
                reject(err);
            }
        });
    }
}

module.exports = User;