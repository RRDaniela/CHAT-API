const dotenv = require('dotenv');
const { MongoClient } = require('mongodb');
const router = require('mongodb').MongoClient;
dotenv.config();

const mongoURL = process.env.DB_CONNECT;


const Database  = {
   dbInstance : null, 
    connect : (callback) => {
        MongoClient.connect(mongoURL, {useUnifiedTopology : true}, (err, client) => { //ERROR FIRST CALLBACK             
        this.dbInstance = client.db();
        callback();
        });
    },
        collection : (name) => {
            return this.dbInstance.collection(name);
        }
    };

module.exports = Database;