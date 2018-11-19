var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('teachers/teachers');
});

router.get('/students', function(req, res, next) {
  res.render('teachers/studentslist');
});

router.get('/quarters', function(req, res) {
  res.render('teachers/quarters');
});

module.exports = router;
