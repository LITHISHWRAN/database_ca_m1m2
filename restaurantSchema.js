const mongoose = require("mongoose");

const restauranrSchema = new mongoose.Schema({
    Name : { type:String, required:true },
    City : { type:String, required:true },
    Items : { type:[String] }
});

const Restaurant = mongoose.model("Restaurant",restauranrSchema);

module.exports = Restaurant;