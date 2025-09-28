const mongoose = require('mongoose');
require('dotenv').config();

// const mongooseUrl ='mongodb://localhost:27017/hotels';

// const mongooseUrl =    'mongodb+srv://shreyansjainofficial1_db_user:0kiJvtL3PDwBhe3s@cluster0.uyuvcah.mongodb.net/'
// const MONGODB_URL = process.env.MONGODB_URL;

//const mongoURL = process.env.MONGODB_URL_LOCAL;
 const mongoURL =process.env.MONGODB_URL;
// set up mongo db connection
mongoose.connect(mongoURL,{
    usenewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection;
 
//defining event listener
db.on('connected', () =>{
    console.log("connected to mongodb server");
});

db.on('error', (err) => {
    console.log("mongodb connection error");
});

db.on('disconnected', () => {
    console.log("mongodb disconnected");
});



module.exports = db;