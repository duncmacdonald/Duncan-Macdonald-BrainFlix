const express = require("express");
const router = express.Router();
const fs = require("fs");

// // Re-usable function to read our data file
function videos() {
    const videoData = fs.readFileSync("./data/videos.json");
    const parsedData = JSON.parse(videoData);
    return parsedData;
}

router.get("/", (_, res) => {
    console.log(videos()[0]);
    //console.log("get videos endpoint");
    res.send("get videos endpoint");    
    // res.json(readNotes());
});

router.get("/:id", (req, res) => {
    console.log("get dynamic video endpoint");
    res.send(`Get dynamic video endpoint ${req.params.id}`);    
    // res.json(readNotes());
});

router.post("/:id/comments", (req, res) => {
    console.log(req.body);
    res.send("get video comments endpoint");    
    // res.json(readNotes());
});

router.delete("/:id/comments/:commentId", (req, res) => {
    console.log(req.body);
    res.send("get video comments endpoint");    
    // res.json(readNotes());
});

// router.get("/:noteId", (req, res) => {
//     const notes = readNotes();
//     const singleNote = notes.find(note => note.id === req.params.noteId);
//     res.json(singleNote);
// });

module.exports = router;