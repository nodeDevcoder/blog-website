const express = require("express");
const app = express();

const mongoose = require('mongoose');

const routes = require("./routes");

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use((req, res, next) => {
    next();
});

app.use(routes);

app.listen(3000, () => {
    console.log(`Server is listening on port 3000`);
});