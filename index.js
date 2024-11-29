const express = require('express')
const mongoose = require('mongoose');
const app = express()
const bodyParser = require("body-parser")            // HINDI KASAMA SA VIDEO
const Product = require('./models/product.model.js');

//MIDDLEWARE
app.use(bodyParser.json())             // HINDI KASAMA SA VIDEO 
app.use(express.urlencoded({extended: false}));                 // FOR x-www-form-urlencoded
app.use(express.json());

//ROUTES
app.use('/api/product', productRoute);


// to see the POST item
app.get('/', (req, res) => {
    res.send("FUCK NAKAKA UMAY DAILY ROUTINE")
});
app.get('/api/product', async (req, res) => {
    try {
       const product =  await Product.find({})
       res.status(200).json(product)
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

// posting the ITEM
app.post('/api/product', async (req, res) => {
    try {
       const product = await Product.create(req.body);
       res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})
// get ID
app.get('/api/product/:id', async (req, res) => {
    try {  
        const { id } = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);

    } catch (error) {
        res.status(500).json({message: error.message})
    }
});
// update a product
app.put('/api/product/:id', async (req, res) => {
    try{
        const {id} = req.params;

        const product = await Product.findByIdAndUpdate(id, req.body);

        if(!product) {
            return res.status(404).json({message: "Product not found"});
        }

        const updatedProduct = await Product.findById(id);
        res.status(200).json(updatedProduct);

    } catch (eroor) {
        res.status(500).json({message: error.message})
    }
})

//DELETE THE ITEM
app.delete('/api/product/:id', async (req, res) => {
    try{
        const {id} = req.params;

        const product = await Product.findByIdAndDelete(id)

        if(!product) {
            return res.status(404).json({messa: "PRODUCT NOT FOUND"});
        }
        res.status(200).json({message: "PRODUCT deleted successfully"});

    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

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

//https://www.youtube.com/watch?v=zBTPDAh8ABM&list=PL6u82dzQtlfvJoAWdyf5mUxPQRnNKCMGt












