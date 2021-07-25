const express = require("express");
const app = express();

const session = require('express-session')

const mongoose = require('mongoose');
const passport = require('passport');
const LocalStrategy = require('passport-local');

const User = require('./models/user');
const routes = require("./routes");


mongoose.connect('mongodb://localhost:27017/blog_web', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    .then(() => {
        console.log("Connected to DB");
    })
    .catch((err) => {
        console.log(err);
    })

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use((req, res, next) => {
    res.locals.webname = "Diary Bin",
    next();
});

app.use(session({ secret: 'keyboard cat', cookie: {}, resave: false, saveUninitialized: true }))

app.use(routes);
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.listen(3000, () => {
    console.log(`Server is listening on port 3000`);
});