const mongoose = require("mongoose");
const bcrypt = require("bcrypt")
const Schema = mongoose.Schema;

var usersSchema = new Schema({

    firstname: {type: String, required:true},
    lastname: {type: String, required: true},
    email: {type: String, required: true},
    date: {type:Date, required: true},
    telephone: {type:Number, required: true},
    country:{type:String, required: true},
    password:{type:String, required: true},
    // products: [{type: Schema.Types.ObjectId, ref: "Product"}]
    })

    // usersSchema.pre("save", (next)=> {
    //     try {
    //         var salt = bcrypt.genSalt(10)

    //         const passwordHash = bcrypt.hash(this.password, salt)
    //         this.password = passwordHash
    //         next()
    //     }
    //     catch(error){
    //         next(error)
    //     }
    // })

    
var User = mongoose.model("User", usersSchema);

module.exports = User;