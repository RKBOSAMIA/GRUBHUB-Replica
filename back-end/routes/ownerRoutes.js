const express = require('express');
const ownerModel = require('../models/ownerModels');
const app = express();

app.get('/',async (req,res)=>{
    const ownerDetails = await ownerModel.find({});
    try{
        res.send(ownerDetails);
    }
    catch(err){
        res.status(500).send(err);
    }
});

app.post('/ownerSignUp',async(req,res)=>{
    const name = req.body.name;
    const email = req.body.email;
    const pwd = req.body.password;
    const restaurant = req.body.restaurant;
    const zipcode = req.body.zipcode;

    const insertQuery = {
        'name':name,
        'email': email,
        'pwd': pwd,
        'restaurant': restaurant,
        'zipcode': zipcode
    };
    console.log(insertQuery);
    const ownerDetails = await ownerModel(insertQuery);
    try{
        await ownerDetails.save();
        res.send({
            message:'Account Created Successfully!'
        });
    }
    catch(err){
        res.status(500).send(err);
    }
});

app.post('/ownerSignIn',async(req,res)=>{

    const email = req.body.email;
    const pwd = req.body.password;

    const ownerDetails = await ownerModel.findOne({'email':email});
    
    if(ownerDetails == null){
        res.send({status:'no',message:'No user found!!'});
        res.end();
    }
    else if(ownerDetails.pwd != pwd){
        res.send({status:'unmatched',message:'Wrong email id or password!!'});
    }
    else if(ownerDetails.pwd == pwd){
        res.send({status:'yes',message:'Welcome ' + ownerDetails.name});
    }
    
});

module.exports = app;