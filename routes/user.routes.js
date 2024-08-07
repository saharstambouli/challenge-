const express = require('express')
const User = require('../models/schemauser')
const router = express.Router()


const fakeData = {
    firstname: 'ridha',
    lastname: 'mohamed',
    email: 'ridha@gmail.com'
}

router.get('/add-user', (req, res) => {
    const newPerson = new User(fakeData)
    newPerson.save()
        .then(() => res.send("user saved success!!"))
        .catch((err) => console.log(err))
})




module.exports = router