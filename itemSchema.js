const mongoose = require("mongoose");

const itemtSchema = new mongoose.Schema({
    Name : { type:String, required:true },
    Price : { type:Number, required:true }
})

const Item = mongoose.model("Item",itemtSchema);

module.exports = Item;