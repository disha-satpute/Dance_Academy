const {write} = require("fs")
var http= require("http")
http.createServer(function (req,res){
    res.write("Hello girls")
    res.end()

}).listen(2500,()=>{
    console.log("server is running") })


