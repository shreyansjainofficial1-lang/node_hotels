const express = require('express');
const router = express.Router();
const person = require('../person');


router.post('/', async(req,res) =>{
    try{

    const data = req.body //assume the request body contains the person data

    //create a new person document using the mongoose model
    const newPerson = new person(data);

    const response = await newPerson.save();
    console.log('data saved');
    res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'internal server error'})
    }
})

//query parameter
router.get('/:workType',async (req,res) =>{
    try{
        const workType = req.params.workType; // extract the worktype from the URL parameter
        if(workType =='chef' || workType == 'waiter' || workType == 'manager'){
            const response = await person.find({work: workType});
            console.log('response fetched');
            res.status(200).json(response);
        }
        else{
            res.status(400).json({error:'invalid work type'});
        }

    }catch(err){
        console.log(err);
        res.status(500).json({error:'Internal Server Error'})
    }
})


router.get('/', async(req,res) =>{
    try{
        const persons = await person.find();
        console.log('data fetched');
        res.status(200).json(persons);
    }catch(err){
        console.log(err);
        res.status(500).json({error:'internal server error'})
    }
    

})
    //using put method
router.put('/:id', async(req,res) =>{
    try{
        const personId = req.params.id;
        const updatedPersonData = req.body;

        const response = await person.findByIdAndUpdate(personId,updatedPersonData,{
        new: true,
        newValidator: true,

        })
         if(!response){
            return res.status(404).json({error:'person not found'})
        }

        console.log('data fetched')
        res.status(200).json(response)

       
    }catch(err){
        console.log(err)
        res.status(500).json('internal server error ')
    }
})

           //suing delete method

router.delete('/:id',async (req,res) =>{
    try{
        const personId = req.params.id; //extracting the person id from the URL

        //assuming we have person model
        const response = await person.findByIdAndDelete(personId);

         if(!response){
            return res.status(404).json({error:'person not found'})
        }

         console.log('data deleted')
        res.status(200).json({message:'person deleted successfully'});



        }catch(err){
            console.log(err)
            res.status(500).json('internal server error ')
        }
    })
module.exports = router;