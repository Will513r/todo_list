const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {


var today = new Date();


var options = { 
  weekday: 'long', 
  year: 'numeric', 
  month: 'long', 
  day: 'numeric' 
};



var day = today.toLocaleDateString("en-US", options);


   res.render("list", { kindOfDay: day, newListItem: item});

});

app.post("/", function (req, res) {
  var item = req.body.newItem;
  res.redirect("/")
});

app.listen(3000, function () {
  console.log("Server started on port 3000.");
});
