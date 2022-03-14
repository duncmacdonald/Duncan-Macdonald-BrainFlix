const express = require("express");
const router = express.Router();
const fs = require("fs");
const { v4: uuidv4 } = require('uuid');

// Read data file
function readVideos() {
    const videoData = fs.readFileSync("./data/videos.json");
    const parsedData = JSON.parse(videoData);
    return parsedData;
}

// Write data file
function writeVideos(data){
    fs.writeFileSync("./data/videos.json", JSON.stringify(data));
}

// Get condensed list of video information
router.route("/")
    .get((_, res) => {   
        res.json(readVideos().map(video => {
            return(
                {
                    id: video.id,
                    title: video.title,
                    channel: video.channel,
                    image: video.image,
                }
            )}));
    })
    .post((req, res) => {
        const newVideo = {
            id: uuidv4(),
            title: req.body.title,
            channel: req.body.channel,
            image: req.body.image,
            description: req.body.description,
            views: "0",
            likes: "0",
            duration: "1:00",
            video: "https://project-2-api.herokuapp.com/stream",
            timestamp: Date.now(),
            comments: [],
        }
        const allVideos = readVideos()
        writeVideos([...allVideos, newVideo]);

        console.log("video posting endpoint");
        res.status(200).json(newVideo);
    });

// Get detailed info about a video
router.get("/:id", (req, res) => {   
    res.json(readVideos().find(video => video.id === req.params.id));
});

// Post a comment to a video
router.post("/:id/comments", (req, res) => {

    if(req.body.name && req.body.comment){
        const comment = { id: uuidv4(), ...req.body, likes: 0, timestamp: Date.now()};
        let allVideos = readVideos();
        writeVideos(allVideos.map(video => { 
                if(video.id === req.params.id){
                    video.comments.push(comment);
                }
                return video
            }));
        
        res.json(comment);  
     } else {
         res.status(400).send("name and comment required");
     }

  
});

// Delete a comment from a video
router.delete("/:id/comments/:commentId", (req, res) => {
    let allVideos = readVideos();
    
    //get the index of the current video
    const videoIndex = allVideos.findIndex(video => video.id === req.params.id)
    
    //retrieve the value of the comment to be deleted
    const comment = allVideos[videoIndex].comments.find(({id}) => id === req.params.commentId)
    
    //remove specified comment
    allVideos[videoIndex].comments = allVideos[videoIndex].comments.filter(comment => comment.id !== req.params.commentId)

    //save the updated data to file
    writeVideos(allVideos);

    //send the client the deleted comment
    res.json(comment);

});

router.put("/:videoId/likes", ( req, res) => {
    let allVideos = readVideos();

    const videoIndex = allVideos.findIndex(video => video.id === req.params.videoId)

    allVideos[videoIndex].likes = (parseInt(allVideos[videoIndex].likes.replace(/,/g,'')) + 1).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    writeVideos(allVideos);

    res.status(200).json(allVideos[videoIndex]);

});


module.exports = router;