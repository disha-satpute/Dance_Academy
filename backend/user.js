var mongoose= require ("mongoose");

let userSchema = new mongoose.Schema({
 Name : String ,
 contact : Number,
 email: String ,
 city : String ,
course : String ,}
)
let user = mongoose.model("user", userSchema ,"user");
module.exports = user;
