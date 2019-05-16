const mongoose = require("mongoose");


var url = "mongodb+srv://admin:admin@cluster0-bxnf6.mongodb.net/test?retryWrites=true";

mongoose.connect(url);

mongoose.Promise = global.Promise

let db = mongoose.connection;

db.on("error", console.error.bind("Mongo Connection Error"));