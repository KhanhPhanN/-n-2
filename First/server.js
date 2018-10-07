var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname ,"public")));
app.set("view engine","ejs");
app.set("views",path.join(__dirname, "views"));
var server  = require("http").Server(app);
var io = require("socket.io")(server);
server.listen(3000);
io.on("connection",function(socket){
console.log("Ket noi thanh cong ...")
socket.on("thong-tin", function(){
    
})

})
app.get("/", function(req,res){ 
    var current = new Date();
res.render("lich",{
ngay : current.getDate(),
thang : current.getMonth()+1,
nam: current.getFullYear()
});
})
app.get("/login/account",function(req,res){
res.render("login")
})
app.get("/signup/account",function(req,res){
    res.render("signup")
    })
app.get("/:id", function(req,res){
    var url = req.params.id;
    var current = new Date();
    var data = url.split("-");
    res.render("ChiTiet",{
        ngay : data[0],
        thang: data[1],
        nam  : data[2],
        ngay1 : current.getDate(),
thang1 : current.getMonth()+1,
nam1: current.getFullYear()
    });
    })