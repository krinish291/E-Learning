var express = require('express');
var mongoose = require('mongoose');
var User = require('./models/User');
var bodyparser = require('body-parser');
var cors = require("cors");
var FeedBack = require('./models/FeedBack');
var MYCon = require('./models/contribution');
var app = express();
var db = mongoose.connect('mongodb://localhost:27017/Krinish_db', function (err) {
    if (err) console.log("There is error in connecting with mongodb");
    console.log('Connection has been added');
});

app.use(cors());
app.use(bodyparser.json());

app.set('port', process.env.port || 3000);


app.get('/', (req, res) => {
    res.send("this is default page");
});

// for creating a user
app.post('/signup', (req, res) => {
    /*console.log(req.body);*/
    //creating instan of a schema User named as 'user'
    var user = new User();
    user.firstname = req.body.firstname;;
    user.lastname = req.body.lastname;;
    user.email = req.body.email;
    user.password = req.body.password;
    user.phone = req.body.phone;

    //it is save the user to the database
    user.save(function (err, user) {
        if (err) {
            var messg = "error in saving user and err is send to you in 'err' obj"
            console.log("there is an err in adding user in database ");
            res.status(500).json([messg, err]);
        }
        else {
            var messg = "user is successfully added";
            console.log('user ' + user.firstname + ' is saved in database');
            res.json([messg, user])
            res.status(200);
        }
    });
});


app.post('/login', (req, res) => {
    console.log(req.body);
    console.log(req.body.email);
    //  console.log(this.email);
    User.findOne({ $and: [{ email: req.body.email }, { password: req.body.password }] }, function (err, user) {
        if (err) {
            //console.log("Unable to find an employee");
            res.status(400);
            res.send(err);
        }
        else {
            console.log("Users found");
            console.log(user);
            res.send(user);
        }
    })
});

//admin side display user
app.get("/display", (req, res) => {
    User.find(function (err, user) {
        if (err) {
            res.status(400);
            res.send("Unable to find names");
        }
        else {
            console.log("All employees returned");
            res.send(user);
        }
    });
});

//delete user
app.delete('/deleteuser/:email', function (req, res) {

    console.log("in deleteuser method");
    console.log(req.params.email);
    email = req.query.data;
    User.find({ "email": req.params.email }, function (err, user) {
        if (err) {
            res.sendStatus({ status: 400 })
            console.log("user not found")
        }
        else {
            console.log(user)
            User.remove({ "email": req.params.email, "deleted": null }, function (err) {
                if (err) {
                    console.log("user not delete")
                    res.send(400)
                }
                else {
                    console.log("user removed")
                    res.send({ "message": "user remove" })
                }
            })
        }
    }
    )
});

///find user
app.get('/user/:email', function (req, res) {
    // console.log("in serach user");
    // /email=req.body.email;
    // console.log(req.body.email);
    console.log(req.params.email);
    User.findOne({ email: req.params.email }, function (err, user) {
        if (err) {
            console.log(err);
            // alert("file");
        }
        else {
            if (user)
             {
                 console.log(user);
                 res.json(user);
                /*if (user.email == req.body.email) {
                    // console.log(user.username);
                    console.log(email);
                    console.log("correct crediantials.....");
                    console.log(user);
                    res.send(user);
                }*/
            }
            else {
                console.log("worng");
               
               /* return*/ res.send(user);
            }
        }
    });
});


//add Feedback
app.post('/home', (req, res) => {
    /*console.log(req.body);*/
   
    var fb = new FeedBack();
    fb.name = req.body.name;;
    fb.comments = req.body.comments;;
    fb.email = req.body.email;
   

    //it is save the user's feedback in the database
    fb.save(function (err, fb) {
        if (err) {
            var messg = "error in saving user's fb and err is send to you in 'err' obj"
            console.log("there is an err in adding user's fb in database ");
            res.status(500).json([messg, err]);
        }
        else {
            var messg = "user's fb is successfully added";
            console.log('user ' + fb.name + ' is saved feedback in database');
            res.json([messg, fb])
            res.status(200);
        }
    });
});



app.put('/updateuser',(req,res)=>{
    console.log(req.body.email);
    User.findOne({email:req.body.email},function(err,user){
        if(err){
            console.log("not found user");
            res.status(400);
            res.send("no user with this id");

        }
        user.firstname=req.body.firstname;
        user.lastname=req.body.lastname;
        user.email=req.body.email;
        user.phone=req.body.phone;
        user.save(function(err){
            if(err){
                console.log(" unable user update");
                res.status(400);
                res.send("unable with this id");
            }
            else{
                console.log("user update successfully");
                res.send({"message":"user update successfully"});
            }
        });
    });
    
})

//admin side feedback display 
app.get("/feedbackdisplay", (req, res) => {
    FeedBack.find(function (err, feedback) {
        if (err) {
            res.status(400);
            res.send("Unable to find names");
        }
        else {
            console.log("All employees returned");
            res.send(feedback);
        }
    });
});



//addmy contributions
app.post('/mycon', (req, res) => {
    /*console.log(req.body);*/
   
    var con = new MYCon(req.body);
   
   

    //it is save the user's feedback in the database
    con.save(function (err, con) {
        if (err) {
            var messg = "error in saving contribution "
            console.log("there is an err in adding contribution in database ");
            res.status(500).json([messg, err]);
        }
        else {
            var messg = "user's contribution is successfully added";
            console.log('user ' + con.email + ' is saved contribution in database');
            res.json([messg, con])
            res.status(200);
        }
    });
});

//contribution display
app.get("/condisplay", (req, res) => {
    MYCon.find(function (err, con) {
        if (err) {
            res.status(400);
            res.send("Unable to find names");
        }
        else {
            console.log("All employees returned");
            res.send(con);
        }
    });
});


app.listen(app.get('port'), function (err) {
    if (err) {
        console.log('this is a err for listing ' + err);
    }
    console.log("server is ruuning", app.get('port'));
});
