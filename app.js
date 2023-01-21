require("dotenv").config();
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var usersRouter = require('./routes/users');
const  mongoose  = require("mongoose");

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', usersRouter);

mongoose
    .connect(process.env.URL, {
        dbName: process.env.DB_NAME,
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Connected Successfully to the Database");
    })
    .catch(console.error);

    //error handling
    app.use((err, req, res, next) => {
        res.status(err.status || 500).send({
            success: false,
            message: err.message,
        });
    });
    
    // Undefined routes error handling
    app.use((req, res, next) => {
        next(createError(404));
        });
module.exports = app;
