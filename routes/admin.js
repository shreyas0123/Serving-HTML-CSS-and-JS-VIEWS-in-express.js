const express = require('express');

const router = express.Router();

const path  = require('path');

const rootDir = require('../util/path')

router.get('/add-product',(req,res,next) =>{    
    res.sendFile(path.join(rootDir,'views','add-product.html'));
});

//Explanation:
//The code defines a middleware function assigned to the '/add-product' path using router.get(). 
//When a GET request is made to '/add-product', this middleware function will be executed. 
//It logs the message "In the another middleware" and sends an HTML form to the client for adding a product. 
//The form contains an input field with the name "title" and a submit button.

router.post('/add-product',(req,res,next) =>{
    console.log(req.body);
    //console.log(JSON.stringify(req.body)); in this [Object: null prototype] { title: 'book' }
    //we can eliminate [Object: null prototype]
    // we will get only { title: 'book' }
    res.redirect('/');
});

//Explanation:
//The code defines a middleware function assigned to the '/product' path using router.post().
// When a POST request is made to '/product', this middleware function will be executed. 
//It logs the contents of req.body, which contains the data submitted through the form. 
//It then redirects the user back to the root path ('/').

module.exports = router;

//Explanation:
//This line exports the router object so that it can be used in other files. 
//The router object contains the defined routes and associated middleware functions.

/*
To summarize, the code sets up two routes: '/add-product' and '/product'. 
When a GET request is made to '/add-product', an HTML form is sent to the client.
 When a POST request is made to '/product', the submitted form data is logged and the user is redirected back to the root path ('/'). 
 The router object is exported for use in other files.

I hope this explanation clarifies the code for you. 

*/