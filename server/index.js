const express = require("express");
const { v4: uuidv4 } = require('uuid');
const app = express();
const cors = require('cors');

//require video routes
const videos = require('./routes/videos');

const PORT = 8080;

//api keys get wiped when the server restarts, "duncan" key is a secret
const keys = ["duncan"];

app.use(cors());
app.use(express.json());

//Create an API key 
app.get('/register',(req,res) =>{
    console.log("api key created");
    keys.push(uuidv4());
    res.status(200).send(keys[keys.length-1]);
});

//All other paths need middleware to check for an api key
app.use((req,res,next) =>{
    console.log(req.query);
    if(!(keys.includes(req.query.api_key))){
        res.status(403).send("Get a new key at /register");
    } else {
    next();
    }
})

//use the videos module for any "/videos" HTTP request 
app.use('/videos', videos);

// app.use((req, res, next) => {
//     console.log(`${req.method}: ${req.url}`);
//     next();
// });

// /static -> /static/cute-cat.jpg
// app.use('/static', express.static('files'));



// Start the server listening
// It's convention to have this at the end of the file
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});