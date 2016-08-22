var express = require('express');
var app = express();
var passport = require('passport');

var LocalStrategy = require('passport-local').Strategy;

passport.use('login', new LocalStrategy(function (username, password, done) {
  var authenticated = username === "John" && password === "Smith";
  
  if (authenticated) {
    return done(null, { myUser:'user', myID: 1234 });
  } else {
    return done(null, false);       
  }
}));