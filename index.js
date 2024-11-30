const express = require('express')
const mongoose = require('mongoose');
const bodyParser = require("body-parser")      //MIDDLEWARE      // HINDI KASAMA SA VIDEO
const Product = require('./models/product.model.js');
const productRoute = require("./routes/product.route.js");
const app = express();


//MIDDLEWARE
app.use(bodyParser.json())             // HINDI KASAMA SA VIDEO 
app.use(express.urlencoded({ extended: false }));        // FOR x-www-form-urlencoded
app.use(express.json());

//ROUTES        -------------URL 
app.use('/api/product', productRoute);


//CONNECT TO MONGODB 
mongoose.connect("mongodb+srv://dungcapaul6:allen123@backenddb.jccys.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB")
    .then(() => {
        console.log("Connected to the database!");
        app.listen(3000, () => {
            console.log('server is running in port 300')
        });
    })
    .catch(() => {
        console.log("Connection failed");
    })


    