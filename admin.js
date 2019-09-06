var express = require("express");
var ejs = require("ejs");
var bodyParser = require("body-parser");
var db = require('./db');
var app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extented: true }));
app.use(bodyParser.json());
exports.admin = function (req, res) {

  var email = req.body.email;
  var password = req.body.password;

  var sql = "SELECT * FROM details ";

  db.query(sql, function (error, results) {
    if ([email] == "admin@gmail.com" && [password] == "admin123") {
      res.render('displayall', {
        results: results,
      }
      )

    }

    else {
      res.send("Sorry,You are not the Admin.");
    }
  });




};