const bodyParser = require("body-parser");
const express = require('express');
const app = express();

app.use(bodyParser.urlencoded({extended: true}))
app.get("/", function(req,res) {

  res.sendFile(__dirname + "/index.html");
});
app.post("/",function(req,res) {
var num1 =  Number(req.body.n1);
  var num2 = Number(req.body.n2);
var result= num1+num2;
res.send("this is the result "+ result);

})
app.listen(3000, function() {
  console.log("hey it's working on port 3000");
});

app.get("/caclculateAgeSeconds",function(req,res){
 res.sendFile(__dirname+"/caclculateAgeSeconds.html");

});
app.post("/caclculateAgeSeconds",function(req,res) {
  var age = Number(req.body.age);
  var ageInSecond = age*26*12*30*24*60*60;
  res.send("you are living for "+ageInSecond+"  seconds");
})
