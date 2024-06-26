const {campgroundSchema, reviewSchema} = require('./schemas');
const ExpressError = require('./utils/ExpressError');
const Campground = require('./models/campgrounds');
const Review = require('./models/review');



module.exports.isLoggedIn = (req,res,next) => {
if(!req.isAuthenticated()){
   
    req.flash('error', 'you must be logged in');
    return res.redirect('/login');
} 
 next();
}

module.exports.validateCampground = (req,res,next) => {
    const { error } = campgroundSchema.validate(req.body);
    if (error) {
       const msg = error.details.map(el => el.message).join(',');
       throw new ExpressError(msg, 400)
    }
    else {
       next();
    }
   }
   module.exports.isAuthor = async(req,res,next) => {
    const { id } = req.params;
    const campground = await Campground.findById(id);
    if(!campground.author.equals(req.user._id)) {
        req.flash('error' , 'this campground was created by someone else');
        res.redirect(`/campgrounds/${campground._id}`)
   }
   next();
}
 module.exports.validateReview = (req,res,next) => {
    const { error } = reviewSchema.validate(req.body);
    if (error) {
       const msg = error.details.map(el => el.message).join(',');
       throw new ExpressError(msg, 400)
    }
    else {
       next();
    }
   }
 module.exports.isReviewAuthor = async(req,res,next) => {
    const { id ,reviewId } = req.params;
    const review = await Review.findById(reviewId);
    if(!review.author.equals(req.user._id)) {
        req.flash('error' , 'this review was given by someone else');
        res.redirect(`/campgrounds/${id}`)
   }
   next();
}