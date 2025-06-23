const express = require('express');
const router = express.Router();
const User = require('../models/user.js');

/*
Action	Route	HTTP Verb
Index	‘/users/:userId/foods’	GET
New	‘/users/:userId/foods/new’	GET
Create	‘/users/:userId/foods’	POST
Show	‘/users/:userId/foods/:itemId’	GET
Edit	‘/users/:userId/foods/:itemId/edit’	GET
Update	‘/users/:userId/foods/:itemId’	PUT
Delete	‘/users/:userId/foods/:itemId’	DELETE
*/

// All routes below are mounted on /users/:userId/foods

// INDEX
router.get('/', async (req, res) => {
    try {
        const currentUser = await User.findById(req.session.user._id)
    
        res.render('foods/index.ejs', {
            foods: currentUser.pantry,
        });
    } catch (error) {
        console.log(error);
        res.redirect('/');
    }
});

// NEW
router.get('/new', (req, res) => {
    res.render('foods/new.ejs');
})

// CREATE
router.post('/', )


module.exports = router;