const express = require('express');

const router = express.Router();

const path = require('path');

const rootDir = require('../util/path')

router.get('/',(req,res,next) =>{
    
    res.sendFile(path.join(rootDir,'views','shop.html'));
});

//Explanation:
//The code defines a middleware function assigned to the root path ('/') using router.get(). 
//When a request is made to any route, this middleware function will be executed. 
//It logs the message "In the another middleware" and sends a simple HTML response to the client. 
//The response is a heading element with the text "Hello from Express.js".

module.exports = router;
//This line exports the router object so that it can be used in other files. 
//The router object contains the defined route and associated middleware function.

//summary:
/*
This line exports the router object so that it can be used in other files. 
The router object contains the defined route and associated middleware function.

To summarize, the code sets up a single route for the root path ('/'). 
When a request is made to any route, the middleware function is executed. 
It logs a message and sends an HTML response with the text "Hello from Express.js". 
The router object is exported for use in other files.
*/
