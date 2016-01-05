var express = require('express');
var router = express.Router();

router.get('/:user/profile', function(req, res, next) {
  res.render('users/profile', {profileUser: req.params.user})
});

router.get('/', ensureLoggedInUser, function(req, res, next) {
  res.render('users/index')
});

router.get('/:username', function(req, res, next) {
  res.render('users/show', {username: req.params.username})
});

router.get('/:someUser/edit', function(req, res, next) {
  res.render('users/edit', {user: req.params.someUser})
});

function ensureLoggedInUser (req, res, next) {
  if (res.locals.currentUser) {
    next();
  } else {
    res.redirect('/login');
  }
}

module.exports = router;
