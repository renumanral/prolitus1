var ejs=require('ejs');
var db=require('./db');
var admin=require('./admin');
var reggister=require('./reggister');
var login = require('./log');
var myprofile=require('./myprofile');
var update=require('./update');

var bodyParser = require('body-parser');

var express=require("express");
var session=require("express-session");
var app=express();
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(session({secret: 'xyz',saveUninitialized: true,resave: true}));


app.get('/',function(req,res){

    res.render('official');
});

app.get('/login',function(req,res){

    res.render('login');
});





app.get('/myprofile',function(req,res){
    
    // if (req.session.loggedin) {
	// 	res.send('Welcome back, ' + req.session.email + '!');
	// } else {
	// 	res.send('Please login to view this page!');
	// }
    // res.end();
    var email = req.session.email;
    console.log("4535365365",email)
    
   // myprofile.profile(req, res);
   var sql="SELECT * FROM details WHERE email=?" ;

   db.query(sql,[email],function(error,results){
       if(error){
           console.log("2020202",error);

       }
       else{
           console.log("78787",results);
           res.render('myprofile',{
            results: results[0],
        });
       }
   });
    
    //  res.render('myprofile');
     
    });


    app.get('/update',function(req,res){
        var email = req.session.email;
    console.log("4535365365",email)
    
   // myprofile.profile(req, res);
   var sql="SELECT * FROM details WHERE email=?" ;

   db.query(sql,[email],function(error,results){
       if(error){
           console.log("2020202",error);

       }
       else{
           console.log("78787",results);
           
           res.render('update',{
            results:results[0],
        });
       }

        
    });
});


app.get('/admin',function(req,res){
    
  res.render('admin');


});

// app.get('/blocked',function(req,res){
     
//     var sql=UPDATE  
       
// });






app.post('/registration',function(req,res){
  reggister.register(req,res);
});


app.post('/login',function(req, res) {

    login.login(req, res);
      });

      app.post('/update',function(req,res){
          update.update(req,res);

      });
  app.post('/admin',function(req,res){
       admin.admin(req,res);
      
  });
app.listen(5010);



