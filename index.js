const express = require('express');
const port = 3003;
const app = express();



app.listen(port, function(error) {
    if(error) {
        console.log('Server Error');
    }
    else {
        console.log("Server is running on the port : ${port");
    }
});