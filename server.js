const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const Restaurant = require("./restaurantSchema");
const Item = require("./itemSchema");

const app = express();

app.use(express.json());

mongoose.connect(process.env.MONGODB_URI)
.then(() => { console.log("Connected to database")})
.catch((err) => {console.error("Failed to connect")})

PORT=3000
app.listen(PORT,() => {
    console.log(`Server running in http://localhost:${PORT}`);
})