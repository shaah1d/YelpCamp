# YelpCamp

YelpCamp is a web application where users can share information about campgrounds, read reviews from other campers, and rate campgrounds. It is inspired by the Yelp website but focused specifically on camping locations.

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [License](#license)

## Features
- User authentication (sign up, log in, log out)
- Create, read, update, and delete campgrounds
- Leave and delete reviews for campgrounds
- Rate campgrounds
- Responsive design for mobile and desktop users

## Tech Stack
- **MongoDB**: Database for storing user and campground information
- **Express.js**: Web framework for Node.js
- **Node.js**: Server-side JavaScript runtime environment

## Installation
1. **Clone the repository:**
    ```sh
    git clone https://github.com/shaah1d/YelpCamp.git
    cd YelpCamp
    ```

2. **Install dependencies:**
    ```sh
    npm install
    ```

3. **Set up environment variables:**
    Create a `.env` file in the root directory and add the following:
    ```plaintext
    DATABASE_URL=your-mongodb-connection-string
    SECRET=your-secret-key
    ```

4. **Start the application:**
    ```sh
    node app.js
    ```

5. **Visit the application:**
    Open your browser and go to `http://localhost:3000`

## Usage
1. **Sign up for an account** to start adding and reviewing campgrounds.
2. **Explore campgrounds** added by other users.
3. **Add your own campgrounds** with photos, descriptions, and locations.
4. **Review and rate campgrounds** you have visited to help others make informed decisions.



## API Endpoints
Here are some of the key API endpoints:

- **GET /campgrounds**: Get a list of all campgrounds
- **POST /campgrounds**: Create a new campground
- **GET /campgrounds/:id**: Get details of a specific campground
- **PUT /campgrounds/:id**: Update a specific campground
- **DELETE /campgrounds/:id**: Delete a specific campground
- **POST /campgrounds/:id/reviews**: Add a review to a campground
- **DELETE /campgrounds/:id/reviews/:reviewId**: Delete a specific review



## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

