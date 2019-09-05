var express=require("express");
var mysql=require("mysql");
var ejs=require("ejs");
var bodyParser=require("body-parser");
var db=require('./db');
var fs=require("fs");
// var moveFile = require('move-file');

  var app=express();
  app.use(express.static('uploads'));


  app.set('view engine','ejs');
  app.use(bodyParser.urlencoded({extented:false}));
  app.use(bodyParser.json());
// var multer  = require('multer')
// var upload = multer({dest: './uploads'});
exports.register = function(req, res) {

console.log("33333333333333",req.body)


    // if (!req.files) {
    //     return res.status(400).send('No files were uploaded.');
    // }



    
    let name = req.body.name;
    let email = req.body.email;
    let password = req.body.password;
    let phone=req.body.phone;
    let country = req.body.country;
    let state=req.body.state;
    let city = req.body.city;
    let hobbies = req.body.hobbies;
    let marital_status=req.body.status;
   
    let gender = req.body.gender;
   
    
    let address = req.body.address;
    let address1 = req.body.address1;
   
    
    let pin = req.body.pin;
    console.log("&&&&&&&&",req.body);
    
    // let uploadedFile = req.file.originalname;
    // console.log("444444",req.file);
    // console.log("**********88",req.file.filename);
    // let filename=req.file.filename;
    //      console.log("#########3333",uploadedFile);


    // let image_name = uploadedFile;
    // console.log("@@@@",image_name);
    
    // let fileExtension = image_name.substring(image_name.lastIndexOf(".")+1);
    // console.log("^^^^^^^^",fileExtension);
    //     image_name = name + '.' + fileExtension;
    //     console.log("~~~~~~~~~",image_name);
    // checkbox select
        let controls = req.body.hobbies;
        let check;
    
        check = hobbies.join();

        console.log("hobbies: " + check);

    // let usernameQuery = "SELECT * FROM details WHERE name = '" + name + "' ";

    // db.query(usernameQuery, (err, result) => {
    //     if (err) {
    //         return res.status(500).send(err);
    //     }
    //     // if (result.length > 0) {
            
    //     //     res.render('official');

    //     // }
    //      else {
            // check the filetype before uploading it
//             if (fileExtension === 'png' || fileExtension === 'jpeg' || fileExtension === 'jpg') {
//                 // upload the file to the /puplic/assets/img dirctory
// moveFile(`${image_name}`, './uploads/',(err)=>{

                
//                     if (err) {
//                                         return res.status(500).send(err);
//                     }

                    // send the player's details to the databse
                    let insertQuery = "INSERT INTO details (name, email, password, phone,country,state,city,hobbies,marital_status, gender,address, address1,pin) VALUES ('" + name + "', '"  + email + "', '" + password + "', '" + phone + "', '" + country + "', '" + state + "', '" + city + "', '" + check + "', '" + marital_status + "', '" + gender + "', '" + address + "', '" + address1 + "', '" + pin + "')";

                    console.log("Data:  " + insertQuery)
                    db.query(insertQuery, (err, result) => {
                        if (err) {
                            return res.status(500).send(err);
                        }
                        res.render('login');


        
                    });
 };
      
        
































//     console.log("renu",req.body);

//     var x=req.body.hobbies;
//     var y;
//     console.log("%%%%%%%%%",y);
//     y= x.join();

//     var name=req.body.name;
//     var   email=req.body.email;
//     var password=req.body.password;
//     var phone=req.body.phone;
//     var hobbies=y;
//     var gender=req.body.gender;
//     var marital_status=req.body.status;
//     var country=req.body.country;
//     var city=req.body.city;
//     var state=req.body.state;
//     var address=req.body.address;
//     var address1=req.body.address1;
//     var pin=req.body.pin;
//     var status=1;
//     var filename=req.body.file;
//         // "created_at": Date.now(),





// console.log("%%%%%55",filename);
//  var ext=`${filename}`.mimetype.split('/')[1];
//  console.log("&&&77",ext);
// var sql="INSERT INTO details set ?";


// if(name && email && password){

//   if(`${password}`.length>=8){
//       db.query(sql,[name,email,password,phone,y,gender,marital_status,country,city,state,address,address1,pin,file],function(error,results){
//       if(error){ console.log("444444",error);}
//       else{res.render('login')};
//     }
//  )}

//  else{
//    res.send("password length must be equal to 8");
//  }

// }
// else{
// res.send("Name,Email and Password must be filled");
// }

