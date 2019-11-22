const express= require('express');
const router= express.Router();
const mongoose= require('mongoose');
const http= require('http');
const path= require('path');
const ejs= require('ejs');
const bodyParser= require('body-parser');
const methodOverride= require('method-override');
var app=express();

app.use(methodOverride());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');
app.set( 'views', path.join( __dirname, 'examples/pages' ));


app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
    console.log('root');
    res.render('login.html');
});

app.get('/register', function(req, res){
    console.log('register');
    res.render('register.html');
});

app.get('/profile', function(req, res){
  console.log('register');
  res.render('user.html');
});

app.get('/bail', function(req, res){
  console.log('bail');
  res.render('bail.html');
});

var port = process.env.PORT || 2353;
app.listen(port, function() {
      console.log('Node.js listening on port ' + port);
})
  

  module.exports =router;