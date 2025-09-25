const mongoose = require('mongoose');

const mongooseUrl ='mongodb://localhost:27017/hotels';

// set up mongo db connection
mongoose.connect(mongooseUrl,{
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