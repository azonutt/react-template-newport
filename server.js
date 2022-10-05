// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
'use strict';

require('dotenv').config()
const express = require("express");
const session = require('express-session')
const passport = require('passport')
const ObjectID = require('mongodb').ObjectID
const LocalStrategy = require("passport-local")
const bodyParser = require("body-parser")
const UserModel = require('./backend/models/userModel')
const mongo = require('mongodb').MongoClient
const mongodb = require('mongodb')
const Db = require('mongodb/lib/db')
const cors = require('cors')
const bcrypt = require('bcryptjs')
const mongoose = require('mongoose')
// const UserModel = require('./models/userschema')



// Sets up the Express App
// =============================================================
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: true,
  saveUninitialized: true
}));


app.use(passport.initialize());
app.use(passport.session());


function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/')
}

mongoose.connect(process.env.DATABASE, (err, db) => {

  if (err) {
    console.log("Database err:" + err);
  } else {
    console.log("Successful connection");
    passport.serializeUser((user, done) => {
      done(null, user._id);
    })
  }
})
passport.deserializeUser((id, done) => {
  UserModel.findOne(
    { _id: new ObjectID(id) },
    (err, doc) => {
      done(null, doc);
    }
  );
});
passport.use(new LocalStrategy(
  function (username, password, done) {
    UserModel.findOne({ username: username }, function (err, user) {
      console.log('User ' + username + ' attempted to log in.');
      if (err) { return done(err); }
      if (!user) { return done(null, false); }
      if (!bcrypt.compareSync(password, user.password)) { return done(null, false); }
      return done(null, user);
    });
  }
))






const PORT = process.env.PORT || 8800;
//this configuration is required for heroku
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});