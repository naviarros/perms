var express = require('express');
var passport = require('passport');
var router = express.Router();


/* GET home page. */
router.get('/dashboard', authenticationMiddleware(), function(req, res, next) {
  res.render('admin/admin');
});

router.get('/teacherstab', function(req, res, next) {
  res.render('admin/teacherstab', { title: 'Teacher Field'});
});

function authenticationMiddleware(){
	return (req, res, next) => {
		console.log(`req.session.passport.user_id: ${JSON.stringify(req.session.passport)}`);
		if(req.isAuthenticated()) return next();
		res.redirect('/auth/login')
	}
}
module.exports = router;
