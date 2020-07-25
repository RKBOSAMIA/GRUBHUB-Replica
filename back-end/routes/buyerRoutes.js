const express = require('express');
const bcrypt = require('bcryptjs');
const flash = require('express-flash');
const buyerModel = require('../models/buyerModels');
const passport = require('passport');

const app = express();
/*initPassport(passport,async (email) => {
    return await buyerModel.findOne({'email':email})
});*/

//app.use(flash());
//app.use(express.static("public"));
app.use(passport.initialize());
app.use(passport.session());
require('../passport-config')(passport);

app.get('/',async (req,res)=>{
    const buyerDetails = await buyerModel.find({});
    try{
        res.send(buyerDetails);
    }
    catch(err){
        res.status(500).send(err);
    }
});

app.post('/buyerSignUp',async(req,res)=>{
    
    const name = req.body.name;
    const email = req.body.email;
    const pwd = await bcrypt.hash(req.body.password,10);

    const insertQuery = {
        'name':name,
        'email': email,
        'pwd': pwd
    };

    const buyerDetails = await buyerModel(insertQuery);
    try{
        await buyerDetails.save();
        res.send({message:'Account Created!!!',user:buyer,status:'OK'});
    }
    catch(err){
        res.status(500).send(err);
    }
});

app.post('/buyerProfile',async(req,res)=>{
    
    const _id = req.body._id;
    const name = req.body.name;
    const email = req.body.email;
    const pwd = await bcrypt.hash(req.body.password,10);

    const filter = {
        '_id':_id
    };
    const updateQuery = {
        'name':name,
        'email': email,
    };
    //console.log(filter);
    //console.log(updateQuery);
    
    try{
        await buyerModel.updateOne(filter,updateQuery);
        res.send('Details Updated');
    }
    catch(err){
        res.status(500).send(err);
    }
});

app.post('/buyerSignIn',(req,res,next)=>{
    passport.authenticate('local',(err,buyer,info)=>{
        if (err) {
            throw err;
        }
        if(!buyer) {
            res.send({message:info,status:'fail'});
        }
        else{
            req.logIn(buyer,err=>{
                if (err) throw err;
                //console.log(req.isAuthenticated);
                //console.log(req.user['name'])
                res.send({message:info,user:buyer,status:'OK'});
            })
        }
    })(req,res,next);
});



module.exports = app;