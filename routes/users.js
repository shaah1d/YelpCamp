const express = require('express');
const passport = require('passport');
const router = express.Router();
const catchAsync = require('../utils/catchAsync')
const User = require('../models/user');
const { storeReturnTo } = require('../middlewares');
const users = require('../controllers/users');


router.route('/register')
    .get(users.registerForm)
    .post( catchAsync(users.registerUser));

router.route('/login')
    .get(users.loginForm)
    .post( passport.authenticate('local', { failureFlash: true, failureRedirect: '/login' }), users.loginUser);


router.get('/logout', users.logoutUser)
module.exports = router;