const express = require('express');
const router = express.Router({mergeParams: true});
const catchAsync = require('../utils/catchAsync');
const Review = require("../models/review")
const Campground = require('../models/campgrounds');
const ExpressError = require('../utils/ExpressError');
const {reviewSchema} = require('../schemas');
const { validateReview, isLoggedIn , isReviewAuthor} = require('../middlewares');
const reviews = require('../controllers/reviews');


router.post('/',isLoggedIn,catchAsync(reviews.postReview))
router.delete('/:reviewId',isLoggedIn,isReviewAuthor, catchAsync(reviews.deleteReview));

module.exports = router;
