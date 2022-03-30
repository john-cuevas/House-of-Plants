// import dependencies

const express = require('express')

// allow front-end back-end interaction
const cors = require('cors')

const app = express()
require('dotenv').config()
const jwt = require("jsonwebtoken");
const cookieParser  = require('cookie-parser');

// config mongoose
require("./configs/mongoose.config")

// express config for post
app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}));
app.use(express.json(), express.urlencoded({ extended:true }))
app.use(cookieParser());

// routes
require("./routes/plants.routes")(app)
require("./routes/user.routes")(app)

// listen to the port
app.listen(8000, () => console.log("The server is all fired up on port 8000"))
