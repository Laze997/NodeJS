const User = require("./models/users");
const Product = require("./models/product")
const express = require("express");
const db = require("./connection");
var api = express();
const bodyParser = require("body-parser");
const session = require("express-session");
const jwt = require("jsonwebtoken")
const jwtSecret = "laze";



api.use(session({secret: "laze"}))
api.get(bodyParser.urlencoded({extended: true}))



api.listen(3000)


let allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Headers', "*");
    next();
  }
  api.use(allowCrossDomain);


api.post("/", (req, res) => {
    var email = req.body.email;
    var password = req.body.password;

    req.session.User = email;

});
  

api.post("/register", (req, res, next)=>{
    var firstname = req.body.firstname;
    var lastname = req.body.lastname;
    var email = req.body.email;
    var date = req.body.date;
    var telephone = req.body.telephone;
    var country = req.body.country;
    var password = req.body.password;

    let user = new User({
        firstname: firstname,
        lastname: lastname,
        email: email,
        date: date,
        telephone: telephone,
        country: country,
        password: password
    });

    user.save(function(err){
        if(err){
            return next(err);
        }
        res.send("User saved!")
    })


});


api.post("/newproduct", (req, res, next)=>{
    var productname = req.body.productname;
    var desc = req.body.desc;
    var type = req.body.type;
    var date = req.body.date;
    var price = req.body.price;
    var userEmail = req.body.userEmail;

    let newproduct = new Product({
        productname: productname, 
        desc: desc,  
        type: type,
        date: date,
        price: price,
        userEmail: userEmail
    });

    newproduct.save(function(err){
        if(err){
            return next(err);
        }
        res.send("New Product saved!");
    })
})

api.get("/products", (req, res, next) => {
    Product.find({}, function(err, products){
        if(err){
            return next(err)
        }
        res.send(products)
    })
})

api.get("/expenses", (req, res, next) => {
    Product.find({}, function(err, products) {
        if(err){
            return next(err)
        }

        res.send(products)
    })
})

api.delete("/products/:id", (req, res, next) => {
    Product.findByIdAndDelete({_id:req.params.id}, function(err){
        if(err){
            return next(err)
        }
        res.send("Succesfully Deleted Product")
    })
})

api.patch("/products/:id", (req, res, next) => {
    Product.findByIdAndUpdate({_id:req.params.id}, req.body, (err) => {
        if(err){
            return next(err)
        }
        res.send("Succesfully Edited")
    })
})











