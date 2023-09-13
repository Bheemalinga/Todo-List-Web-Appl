const express = require('express');
const path = require('path');
const port = 3003;
const app = express();

const Todo = require('./models/todo');
const db = require('./config/db');


app.set('view engine', 'ejs'); // setting ejs view engine for rendering ejs file
app.set('views', './views'); // setting views directory for ejs files


app.listen(port, function(error) {
    if(error) {
        console.log('Server Error');
    }
    else {
        console.log("Server is running on the port : ${port");
    }
});