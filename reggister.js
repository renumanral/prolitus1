var express = require("express");
var mysql = require("mysql");
var ejs = require("ejs");
var bodyParser = require("body-parser");
var db = require('./db');
var fs = require("fs");

// var moveFile = require('move-file');

var app = express();
app.use(express.static('uploads'));


app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extented: false }));
app.use(bodyParser.json());
var multer = require('multer');

const DIR = './uploads'

let storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, DIR);
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

let upload = multer({ storage: storage });


exports.register = function (req, res) {
try{
    console.log("33333333333333", req.body)
if(req.file){
    let name = req.body.name;
    let email = req.body.email;
    let password = req.body.password;
    let phone = req.body.phone;
    let country = req.body.country;
    let state = req.body.state;
    let city = req.body.city;
    let hobbies = req.body.hobbies;
    let marital_status = req.body.status;
    let gender = req.body.gender;
    let address = req.body.address;
    let address1 = req.body.address1;
    let pin = req.body.pin;
    let file = req.file.filename;
    let controls = req.body.hobbies;
    let check;

    check = hobbies.join();

    console.log("hobbies: " + check);


    if(password.length < 8){
        res.send("password length must be greater than 8")
    }
    if( phone.length != 10){
        res.send("Please fill correct number")
    }

    

    else{

    let insertQuery = "INSERT INTO details (name, email, password, phone,country,state,city,hobbies,marital_status, gender,address, address1,pin,filename) VALUES ('" + name + "', '" + email + "', '" + password + "', '" + phone + "', '" + country + "', '" + state + "', '" + city + "', '" + check + "', '" + marital_status + "', '" + gender + "', '" + address + "', '" + address1 + "', '" + pin + "', '" + file +"')";

    console.log("Data:  " + insertQuery)
    db.query(insertQuery, (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
         else{
        req.flash('register', 'User registered successfully');
        res.redirect("/login");
         }

    });
}
}
 else {
    console.log("eror in file uploading!")
}



}
catch(e) {
console.log("error",e)
}
   
};


// app.post('/api/upload',upload.single('profile'), function (req, res) {
//     message = "Error! in image upload."
//       if (!req.file) {
//           console.log("No file received");
//             message = "Error! in image upload."
//           res.render('index',{message: message, status:'danger'});
      
//         } else {
//           console.log('file received');
//           var sql = "INSERT INTO `file`(`name`, `type`, `size`) VALUES ('" + req.file.filename + "', '"+req.file.mimetype+"', '"+req.file.size+"')";
//   console.log("sql",sql)
//                   var query = db.query(sql, function(err, result) {
//                       if(err){
//                           console.log("err",err);
//                       } else {
//                      console.log('inserted data');                        
//                       }
//                   });
//           message = "Successfully! uploaded";
//           res.render('index',{message: message, status:'success'});
  
//         }
//   });














