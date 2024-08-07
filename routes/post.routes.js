const express = require('express')
const router = express.Router()
const Post= require('../models/schemapost')
const mongoose = require('mongoose');


const fakePost = {
    title:'Post '   ,
    description: 'Ceci est un post' , 
    userId: new mongoose.Types.ObjectId('66b398e9004d7217321621f7')
}


router.get('/add-post', (req, res) => {
    const newPost = new Post(fakePost)
    newPost.save()
        .then(() => res.send("Post saved success!!"))
        .catch((err) => console.log(err))
})

module.exports = router