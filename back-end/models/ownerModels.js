const mongoose = require('mongoose');

const owner = new mongoose.Schema({
    name:{
        type : String,
        required : true,
    },
    email:{
        type : String,
        required : true,
        trim : true
    },
    pwd : {
        type: String,
        required :true
    },
    restaurant: {
        type: String,
        required: true
    },
    zipcode: {
        type : String,
        required: true
    }
});

const ownerSchema = mongoose.model('ownerSchema',owner,'c_ownerDetails');
module.exports = ownerSchema;