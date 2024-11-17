/*var express = require("express")
var dbConfig = require("./dbConfig")
var user = require("./user")
var cors = require ("cors")
let app = express()
app.use(express.json())
 
app.get("/", async (req, res) => {

    let data = await user.find()
    res.send(data);
})
app.listen(2500, () => {
    console.log("server is running");
});
app.post("/", async (req, res) => {

    let data = await user(req.body)
    let result = await data.save()
    res.send(result);
})*/



/* http server create...
var http = require("http")
var fs = require("fs");

http.createServer(function (req, res) {
    fs.readFile("index.html", function (err, data) {

        res.writeHead("200", { "Content-Type": "text/html" });
        res.write(data);
        res.end();
    })

}).listen(4000) */
/* static database 
app.get("/", async (req, res) => {

    let data = await user.find()
    res.send(data);
})
app.listen(2500, () => {
    console.log("server is running");
});

*/

var express=require ("express")

//var dbConfig =require("./dbConfig")


var user  = require("./user")
var cors=require("cors")


let app = express()
app.use(express.json())
app.use(cors())
app.get("/",async(req,res)=>{

    let data= await user.find()
       res.send(data)
})



app.listen(2500,()=>
{
    console.log("Server is running!!")
});
app.post("/",async(req,res)=>{
    let data=await user(req.body)
   // let result=await data.save()
    res.send(data)
})
