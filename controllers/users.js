const User = require('../models/user');

module.exports.registerForm = (req, res) => {
    res.render('users/register');
}
module.exports.registerUser = async(req,res) => {
    try{
    const {username, email, password} = req.body;
   const user = new User({email, username});
   const registeredUser =  await User.register(user, password);
   console.log(registeredUser);
   req.login(registeredUser,err => {
    if(err) return next(err);
   req.flash('success', 'Welcome to YelpCamp');
   res.redirect('/campgrounds')})}
   catch(e) {
    req.flash('error', e.message);
    res.redirect('/register')
   }
}
module.exports.loginForm =  (req,res) => {
    res.render('users/login');
}
module.exports.loginUser = (req,res) => {
    req.flash('success', 'Welcome to YelpCamp');
    res.redirect('/campgrounds');
}
module.exports.logoutUser = (req, res, next) => {
    req.logout(function (err) {
        if (err) {
            return next(err);
        }
        req.flash('success', 'Successfully Logged you out');
        res.redirect('/campgrounds');
    });
}