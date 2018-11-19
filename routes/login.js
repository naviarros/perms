var express = require('express');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var ConnectRoles = require('connect-roles');
var router = express.Router();

var db = require('../db.js');
/* Authentication Parameters */
router.get('/login', function(req, res, next) {
  res.render('login/login');
});

passport.use(new LocalStrategy(function(username, password, done){
  console.log(username);
  console.log(password);

  return done(null, 'erewr');
}));

router.post('/login', passport.authenticate('local', {

  failureRedirect: '/auth/login'}),

  function(req, res){
      res.redirect('/admin/dashboard');
  });

passport.serializeUser(function(user_id, done) {
  done(null, user_id);
});

passport.deserializeUser(function(user_id, done) {
  done(null, user_id);
});

var roles = new ConnectRoles({
  failureHandler: function (req, res, action) {
    // optional function to customise code that runs when
    // user fails authorisation
    var accept = req.headers.accept || '';
    res.status(403);
    if (~accept.indexOf('html')) {
      res.render('access-denied', {action: action});
    } else {
      res.send('Access Denied - You don\'t have permission to: ' + action);
    }
  }
});

router.use(roles.middleware());

roles.use(function(req, action){
  
})
module.exports = router;
