requestAnimationFrame("dotenv").config({
    path: ".env.production",

});

const mongose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/")