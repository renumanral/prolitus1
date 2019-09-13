var ejs = require('ejs');
var db = require('./db');
var admin = require('./admin');
var reggister = require('./reggister');
var login = require('./log');
var myprofile = require('./myprofile');
var update = require('./update');
var mysql = require("mysql");
var path = require("path");
var multer = require('multer');
var bodyParser = require('body-parser');
var express = require("express");
var session = require("express-session");
var app = express();
const DIR = './uploads'

var flash = require('connect-flash');


// saving picture
let storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, DIR);
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});
// saving picture



let upload = multer({ storage: storage });
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(session({ secret: 'xyz', saveUninitialized: true, resave: true }));


// flash
app.use(flash());
app.use((req, res, next) => {
    res.locals.success = req.flash('success');
    res.locals.register = req.flash('register');

    next();

});
// flash




app.get('/', function (req, res) {

    res.render('official');
});

app.get('/registration', function (req, res) {

    res.render('official');
});


app.get('/login', function (req, res) {

    res.render('login');


});



app.get('/myprofile', function (req, res) {


    var email = req.session.email;
    console.log("4535365365", email)
    var sql = "SELECT * FROM details WHERE email=?";
    db.query(sql, [email], function (error, results) {
        if (error) {
            console.log("2020202", error);

        }
        else {
            res.render('myprofile', {
                results: results[0],
            });



        }
    });

});


app.get('/update', function (req, res) {
    var email = req.session.email;
    console.log("4535365365", email)
    var sql = "SELECT * FROM details WHERE email=?";

    db.query(sql, [email], function (error, results) {
        if (error) {
            console.log("2020202", error);

        }
        else {

            res.render('update', {

                results: results[0],

            });
        }

    });

});


app.get('/admin', function (req, res) {

    res.render('admin');
   
});


app.get('/logout', function (req, res) {
    console.log("destroyed", req.session);

    req.session.destroy(function (req, resp, err) {
        if (err) {
            console.log("awzsexdrcftvgy", err);
        }
        else {
            console.log("destroyed");
            res.redirect("login")
        }
    })


});




app.post('/registration', upload.single('profile'), function (req, res) {
    console.log("inside post")
    reggister.register(req, res);
});


app.post('/login', function (req, res) {

    login.login(req, res);
});

app.post('/update', function (req, res) {
    update.update(req, res);

});
app.post('/admin', function (req, res) {
    admin.admin(req, res);

});

app.post('/blocked', function (req, res) {

    var x = req.body.hidden;
    var y = req.body.hidden1;
    console.log("$%$%$%$%", x);
    console.log("<><><><>", y);

    var sqlss = mysql.format("UPDATE details SET status = ? WHERE id = ?", [y, x]);
    console.log("4444444444444", sqlss)
    db.query(sqlss, function (error, results) {
        if (error) {
            console.error('Err3or', error);
        }
        else {
             req.flash('success', 'Changes have been done successfully');
             console.log("|+|+||+|+|+", req.flash)
             res.redirect('/admin')
        }
    });



});




app.listen(5010);



