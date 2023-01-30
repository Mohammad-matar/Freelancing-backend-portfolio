require("dotenv").config();
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors");
// var fileUpload = require("express-fileupload")


var personalInfoRoute = require('./routes/personalInfo');
var experienceRoute = require('./routes/experience');
var skillRoute = require('./routes/skill');
var serviceRoute = require('./routes/service');
var projectRoute = require('./routes/project');
var contactRoute = require('./routes/contact');
var authRouter = require("./routes/auth");
var userRouter = require('./routes/user');

var uploadRouter = require('./routes/upload');


var app = express();
const mongoose = require("mongoose");

// app.use(fileUpload())

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());


app.use('/personalInfo', personalInfoRoute);
app.use('/experience', experienceRoute);
app.use('/skills', skillRoute);
app.use("/services", serviceRoute);
app.use('/projects', projectRoute);
app.use('/contact', contactRoute);
app.use("/auth", authRouter);
app.use("/user", userRouter);
app.use('/upload', uploadRouter);


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
