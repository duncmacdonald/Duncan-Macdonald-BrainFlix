const express = require("express");
const { v4: uuidv4 } = require('uuid');
const app = express();
const cors = require('cors');

require('dotenv').config();
const {PORT} = process.env;

//require video routes
const videos = require('./routes/videos');



// Generated keys keys get wiped when the server restarts, "duncan" key is persistent
const keys = ["duncan"];

app.use(cors());
app.use(express.json());
app.use('/static', express.static('public/images'));

//Create an API key 
app.get('/register',(req,res) =>{
    keys.push(uuidv4());
    res.status(200).send(keys[keys.length-1]);
});

//All other paths need middleware to check for an api key
app.use((req,res,next) =>{
    if(!(keys.includes(req.query.api_key))){
        res.status(403).send("Get a new key at /register");
    } else {
    next();
    }
})

//use the videos module for any "/videos" HTTP request 
app.use('/videos', videos);


// Start the server listening
// It's convention to have this at the end of the file
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});