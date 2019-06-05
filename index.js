const Product = require("./models/product");
const express = require("express");
var api = express();
const db = require("./connection");
const User = require("./models/users");
const myParser = require("body-parser");
var cors = require("cors")
api.use(cors())
api.use(myParser.urlencoded({ extended: true }));
api.use(myParser.json());
const session = require("express-session");


api.use(session({ secret: "test" }));

let allowCrossDomain = function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
};
api.use(allowCrossDomain);

api.listen(3000);


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

api.post("/", (req, res) => {
    var email = req.body.email;
    var password = req.body.password;

    req.session.User = email;

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

api.delete('/products/:id', (req, res, next) => {
    Product.findOneAndDelete({ _id: req.params.id }, function (err) {
        if (err) {
            return next(err)
        }
        Product.find({}).then(data => res.send(data))
    }
    )
})

api.patch("/products/:id", (req, res, next) => {
    Product.findByIdAndUpdate({_id: req.params.id }, req.body, (err) => {
        if(err){
            return next(err)
        }
        res.send("Succesfully Edited")
    })
})











