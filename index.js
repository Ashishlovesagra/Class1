const express = require("express");
const app = express();

app.get('/',function(req,res){
    res.send('Hello Ashish');
})

app.get('/login',function(req,res){
    res.send('Login successfully');
})

app.get('/login/user',function(req,res){
    res.send('User login successfully');
})

app.listen(3002);