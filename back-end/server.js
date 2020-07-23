const config = require('./config');
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const session = require('express-session');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const buyerRoutes = require('./routes/buyerRoutes');
const ownerRoutes = require('./routes/ownerRoutes');

const app = express()
const PORT = 5000
const URI = 'mongodb+srv://rushikesh:rushikesh95@cluster0.copy6.mongodb.net/grub-hub?retryWrites=true&w=majority'

app.use(cors({
    origin : "http://localhost:3000",
    credentials:true
}));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieParser(config.SESS_SECRET));
app.use(session({
    //name:config.SESS_NAME,
    secret: 'keepitsimple',
    resave: false,
    saveUninitialized: false,
    cookie: {secure:true}
}));
app.use(buyerRoutes);
app.use(ownerRoutes);

mongoose.connect(URI,{useUnifiedTopology:true,useNewUrlParser:true}).then(()=>{
    console.log('Connection Established');
}).catch(err =>{
    console.log(err);
})

app.listen(PORT,()=>{
    console.log(`Server connected to http://localhost: ${PORT}`);
})