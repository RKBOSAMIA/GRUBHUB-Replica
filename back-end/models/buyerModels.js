const mongoose = require('mongoose');
const passportLocal = require('passport-local-mongoose');

const buyer = new mongoose.Schema({
    name:{
        type : String,
        required : true,
    },
    email:{
        type : String,
        required : true,
        trim : true
    },
    pwd :{
        type: String,
        required :true
    }
});

//buyer.plugin(passportLocal);
const buyerSchema = mongoose.model('buyerSchema',buyer,'c_buyerDetails');
module.exports = buyerSchema;