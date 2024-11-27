const express = require('express')
const mongoose = require('mongoose');
const app = express()

app.use(express.json());


app.get('/', (req, res) => {
    res.send("FUCK NAKAKA UMAY DAILY ROUTINE")
});

app.post('/api/product', (req, res) => {
    res.send("data Receiver");
    res.send(req.body);
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

