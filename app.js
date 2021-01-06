const express = require('express')
const bodyParser = require("body-parser")

const app = express();
app.use(express.static('public'))
let items = [];
app.use(bodyParser.urlencoded({extended : true}))
app.set("view engine", 'ejs');

var daycode = new Date();
var day;


app.get("/", function(req, res) {

var options = {
  weekday : "long",
  day : "numeric",
  month : "long"

}
    day = daycode.toLocaleDateString("en-US", options);

res.render('list', {dayofweek : day, newitems : items})
  }
)

app.post("/", function(request, response){
  console.log(request.body.todo);
  var item = request.body.todo;
  items.push(item)
  response.redirect('/')

})
app.post('/clear', function(req, res){
  items = [];
  res.redirect('/')
})


app.listen(3000, function(req, res) {


  console.log("server is Running ");

})
