const express = require("express");
const router = express.Router({ mergeParams: true });
const User = require('../models/user');

router.get('/', (req, res) => {
    res.render("home")
})

router.get('/login', (req, res) => {
    res.render('login')
})

router.route('/signup')
    .get((req, res) => {
        res.render('signup')
    })
    .post((req, res) => {
        const user = new User({ email: req.body.email, username: req.body.username });
        const reg = await User.register(user, req.body.password);
        res.send(reg);
    })


router.get('/fakeUser', async (req, res) => {
    const user = new User({ email: 'jibrilasif@gmail.com', username: 'Jibril' });
    const reg = await User.register(user, 'asif');
    res.send(reg);
})

module.exports = router;