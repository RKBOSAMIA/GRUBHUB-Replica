const buyerModel = require('./models/buyerModels');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');

module.exports = function(passport){
    passport.use(
        new LocalStrategy({usernameField:'email'},(email,password,done)=>{
            buyerModel.findOne({email:email},(err,buyer)=>{
                console.log(buyer);
                if (err) {
                    console.log("err");
                    throw err;
                }
                if (!buyer) {
                    console.log("not buyer");
                    return done(null,false,'No User Found!!');
                }
                bcrypt.compare(password,buyer.pwd,(err,result)=>{
                    if (err) {
                        console.log("compare error");
                        throw err;
                    }
                    if (result === true){
                        console.log('matched');
                        return done(null,buyer,'Authenticated Sucessfully');
                    }
                    else{
                        console.log('not matched');
                        return done(null,false,'Wrong Password!!');
                    }
                });
            });
        })
    );
    passport.serializeUser((buyer,done)=>{done(null,buyer.id)});
    passport.deserializeUser((id,done)=>{buyerModel.findOne({_id:id},(err,buyer)=>{
        done(err,buyer);
    })});
};

/*function init(passport,getUserByEmail){
    const authenticateUser = async (email,password,done) =>{
        const buyerDetails = await getUserByEmail(email);
        console.log(buyerDetails);
        if(buyerDetails == null){
            
            return done(null,false,{message:'No user found!!'});
        }
        try{
            if(await bcrypt.compare(password,buyerDetails.pwd)){
                return done(null,buyerDetails);
            }
            else{
                console.log('hello');
                return done(null,false,{message:'Wrong email id or password!!'});
            }
        }
        catch(err){
            return done(err);
        }
    }
    passport.use(new LocalStrategy(authenticateUser));
    passport.serializeUser((buyerModel,done)=>{done(buyerModel.id)});
    passport.deserializeUser((id,done)=>{buyerModel.findOne({_id:id},(err,buyerModel)=>{
        done(err,buyerModel);
    })});
}

module.exports = init;*/