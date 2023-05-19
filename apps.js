//importing path
const path = require('path');

//Importing Modules:
const express = require('express');

const bodyParser = require('body-parser'); //before using these u need to install in terminal npm install --save body-parser
//why we install because in terminal we get undefined output because when we make user to redirect back to the wepage in terminal we get 'undefined' text
//in order to prevent this we install package bodyParser

// Explanation:
//The code imports the necessary modules: express, adminRoutes, shopRoutes, and body-parser. 
//express is the main module for creating an Express application, while adminRoutes and shopRoutes refer to the route handlers defined in separate files. 
//body-parser is used to parse the request body.

const app = express();//Creating an Express Application

//importing routes
const adminRoutes = require('./routes/admin') //routes refer to routes folder name

//importing routes
const shopRoutes = require('./routes/shop');  //routes refer to routes folder name

//importing routes
const contactusRoutes = require('./routes/contactus')

//importing routes
const successRoutes = require('./routes/success')

// Explanation:
// The code creates a new Express application by calling the 'express()' function, and the resulting application object is assigned to the variable 'app'.
// This 'app' object is the main interface for configuring routes and handling HTTP requests.


app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public'))) //storing css in public folder inside css folder inside main.css folder so no need write each time css in shop.js,admin.js

app.use('/admin',adminRoutes);
app.use(shopRoutes);
app.use(contactusRoutes);
app.use(successRoutes);


//Explanation:
//An Express application is created using express(), and the resulting object is assigned to the variable app. 
//body-parser middleware is set up using app.use() to parse the request body as URL-encoded data. 
//shopRoutes and adminRoutes are added as middleware to handle specific paths.

// Handling 404 Page Not Found
app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html')) //when i make request like localHost:4000/kbcnfjn i will get message as Page Not Found
})


//Explanation
//A middleware function is defined using app.use() for the root path ('/'). 
//Whenever a request is made to any route, this middleware function will be executed first. 
//It logs the message "This always runs" and then calls next() to pass control to the next middleware function.

app.listen(3000); //create server method and server.listen(3000) can internally done by Express.js only
//(chunk) ,buffer,parsebody,{Content-Type:'text/html'} we can provide if not express.js internally does this
//no need res.write(creatinh html file, internally done by express.js)
//instead we can use res.send

// Explanation:
// The code starts the server by calling the 'app.listen()' method.
// It makes the Express application listen on port 3000 for incoming HTTP requests.


//my explanation 
//whenever i make an request to server by localhost:3000 
//by default it will give us response as Hello from Express.js
//whenever i make request if i do localhost:3000/add-product
//form will be created and i will enter book as a text then submit the button
//i will get [Object: null prototype] { title: 'book' } in terminal
//after { title: 'book' } '/' using this because client is redirecting to the webpage to give more input
//that time i will res as Hello from Express.js(after clicking submit button i will get this response)



/*
GET: This method is used to retrieve data from the server. 
When a client makes a GET request, it is expecting to receive data from the server. 
For example, when you visit a website or click on a link, a GET request is made to fetch the corresponding web page.

POST: This method is used to send data to the server, typically for creating or updating a resource on the server. When a client submits a form or sends data through an API, a POST request is made. The data sent in the request is typically included in the request body.

*/

