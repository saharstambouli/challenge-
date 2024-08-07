const mongoose = require('mongoose')

const Schema = mongoose.Schema ;

const PostSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    userId: { type: Schema.Types.ObjectId}
})


const Post = mongoose.model('Posts',PostSchema)

module.exports = Post