const mongoose = require('mongoose')

const Schema = mongoose.Schema ;

const userSchema = new Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true }
})


const User = mongoose.model('users',userSchema)

module.exports = User