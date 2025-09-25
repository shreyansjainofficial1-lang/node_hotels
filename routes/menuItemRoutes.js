const express = require('express');
const router = express.Router();
const menuItems = require('../menuItems');


//post router to add a menuItem
router.post('/', async(req,res) =>{
    try{
        const data_new =req.body
        const newMenu = new menuItems(data_new);

        const response2 = await newMenu.save();
        console.log('data saved'); 
        res.status(200).json(response2);
    }catch(err){
        console.log(err);
        res.status(500).json({error:'internal server error'})
    }
})
router.get('/', async(req,res) =>{
    try{
        const MenuData = await menuItems.find();
        console.log('data fetched');
        res.status(200).json(MenuData);

    }catch(err){
        console.log(err);
        res.status(500).json({error:'internal server error'});
    }
})
//query parameter
router.get('/:foodtype', async(req,res) =>{
    try{
        const foodtype = req.params.foodtype;
        if(foodtype == 'sweet' || foodtype == 'sour' || foodtype == 'spicy'){
            const response = await menuItems.find({taste:foodtype});
            console.log('response is fetched');
            res.status(200).json(response);
        }

    }catch(err){
        console.log(err);
        res.status(500).json({error:'internal server error'});

    }
})
//this is a comment
module.exports = router;
   