var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});




router.get('/video', function(req, res,next) {
	res.render('dashboard/video');
})

router.get('/feedback', function(req, res,next) {
	res.render('dashboard/feedback');
})

router.get('/history', function(req, res,next) {
	res.render('dashboard/history');
})

router.get('/post', function(req, res,next) {
	res.render('dashboard/post');
})

router.get('/users', function(req, res,next) {
  res.render('dashboard/users');
})

router.get('/together', function(req, res,next) {
  res.render('dashboard/together');
})

router.get('/addpost', function(req, res,next) {
	res.render('dashboard/addpost');
})

router.get('/admin', function(req, res,next) {
  res.render('dashboard/admin');
})

module.exports = router;
