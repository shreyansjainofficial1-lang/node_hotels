const express = require('express')
const app = express();
const db = require('./db');

const bodyParser = require('body-parser');
app.use(bodyParser.json()); 

//Import the router files

const menuItemRoutes = require('./routes/menuItemRoutes');
const personRoutes = require('./routes/personRoutes');
//Use The Router
app.use('/person',personRoutes);
app.use('/menuItems',menuItemRoutes); // MY ERROR ( ./menuItem was using instead of /menuItems)




app.get('/', function(req,res){
    res.send('welcome to our hotel')
})




app.listen(3000, () =>{
    console.log("listening on port 3000")
})