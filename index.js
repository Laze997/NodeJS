const users = require("./models/users");
const product = require("./models/product")
const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");

var api = express();

api.use(session({secret: "laze"}))
api.use(bodyParser.urlencoded({extended:true}));


var u1 = new users.create("lazar","stepanoski","lazar@yahoo.com","17/03/1997", "078500000", "Macedonia", "123456");

api.post("/register", (req, res)=>{
    var firstname = req.body.firstname;
    var lastname = req.body.lastname;
    var email = req.body.email;
    var date = req.body.date;
    var telephone = req.body.telephone;
    var country = req.body.country;
    var password = req.body.password;


    var newUser = new users.create(firstname, lastname, email, date, telephone, country, password);
});

api.post("/login", (req, res) => {
    var email = req.body.email;
    var password = req.body.password;

    // database checks
    req.session.user = email; 

    // return response to frontEnd
});

api.post("/newproduct", (req, res) => {
    if(req.session.email){
        var productname = req.bodyproductname;
        var desc = req.body.desc;
        var type = req.body.type;
        var date = req.body.date;
        var price = req.body.price;
        var userEmail = req.session.email;

        var p = new product.create(productname, desc, type, date, price, userEmail);
        // send response to frontend
    }

    else{
        res.status(403).send("Access denied")
    }

    
})




