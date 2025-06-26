const express = require('express');
const router = express.Router();
const User = require('../models/user.js');


router.get('/communityPage', async (req, res) => {
    const usersInDatabase = await User.find({}).sort({ username: 1 })
    console.log(usersInDatabase)

    res.render('users/index.ejs', {
        users: usersInDatabase,
    })
})





module.exports = router;