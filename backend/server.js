const mongoose = require('mongoose')
const express = require('express')
require('dotenv').config()

const app = express();

mongoose.connect(process.env.MONGO)
    .then(() => {
        console.log("Connected to Local db");
});


const login = require('./routes/login.route');
const exercises = require('./routes/exercises.route');

app.use('/login', login);
app.use('/exercises', exercises);


app.listen('4000', function(err) {
    if(err) console.log(err);
    console.log("Server opened on localhost:4000");
})