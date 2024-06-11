
const mongoose = require('mongoose');
const cities = require('./cities');
const { descriptors, places } = require('./seedHelpers');
const Campground = require('../models/campgrounds');
mongoose.connect('mongodb://127.0.0.1:27017/Yelp-Camp', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});
const sample = array => array[Math.floor(Math.random() * array.length)]
const seedDB = async () => {
    await Campground.deleteMany({});
    for (let i = 0; i < 15; i++) {
        const random1000 = Math.floor(Math.random() * 1000);
        const price = Math.floor(Math.random() * 20 + 10);
        const title = ` ${sample(descriptors)} ${sample(places)}`;
        const c = new Campground({
            author: '66482a763b767492ee7115f7',
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: title,
        //  image: 'https://images.unsplash.com/photo-1518602164578-cd0074062767?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            description: `Welcome to ${title}, a serene escape nestled amidst towering trees and tranquil streams. Our rustic retreat boasts spacious campsites, perfect for pitching tents or parking RVs. Immerse yourself in nature with scenic hiking trails that wind through lush forests and alongside babbling brooks.`,
            price: price,
            images:  [
                {
                  url: 'https://res.cloudinary.com/dv6t6t4lp/image/upload/v1717820781/YelpCamp/waxvjbo8ffoofpikkmlb.jpg',
                  filename: 'YelpCamp/waxvjbo8ffoofpikkmlb',
                  
                },
                {
                  url: 'https://res.cloudinary.com/dv6t6t4lp/image/upload/v1717820788/YelpCamp/okdcelyhucz0eaefvv4r.jpg',
                  filename: 'YelpCamp/okdcelyhucz0eaefvv4r',
      
                },
                {
                  url: 'https://res.cloudinary.com/dv6t6t4lp/image/upload/v1717820787/YelpCamp/xtwqzoyljvzp8l6ourys.jpg',
                  filename: 'YelpCamp/xtwqzoyljvzp8l6ourys',
        
                }
          
              ]
        })
        await c.save();
    }
}
seedDB().then(() => {
    mongoose.connection.close();
})
