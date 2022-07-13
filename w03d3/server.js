const express = require('express');
const cookieParser = require('cookie-parser');
const PORT = 8081;

const app = express();
app.set('view engine','ejs');

//
// Middleware
//
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//
// "Database" stub
//
const users = {
  'nally': {username: 'nally', password: 'qwerty'}
};

//
// POST Routes
//
app.post('/users/new', (req,res) => {
  console.log('req.body',req.body);
  users[req.body.username] = {username: req.body.username, password: req.body.password};
  res.redirect('/');
});

app.post('/users/login', (req,res) => {
  console.log('req.body',req.body);
  const enteredUsername = req.body.username;
  const enteredPassword = req.body.password;

  if (!users[enteredUsername]){
    console.log('no such username');
    res.redirect('/');
  }

  if (enteredPassword !== users[enteredUsername].password) {
    console.log('incorrect password');
  } else {
    res.cookie('user',enteredUsername);
  }
  res.redirect('/');

});

app.post('/users/logout', (req,res) => {
  console.log('req.body',req.body);
  res.clearCookie('user');
  res.redirect('/');
});

//
// GET Routes
//
app.get('/', (req,res) => {
  console.log('users',users);
  res.render('home');
});

app.get('/register', (req,res) => {
  res.render('register');
});

app.get('/login', (req,res) => {
  res.render('login');
});

app.get('/profile', (req,res) => {
  console.log('req.cookies',req.cookies);
  if (!users[req.cookies.user]){
    console.log('not logged in');
    res.redirect('/');
  }
  const templateVars = {
    password: users[req.cookies.user].password
  };
  res.render('profile', templateVars);
});

app.get('/logout', (req,res) => {
  res.render('logout');
});

//
// Set up an event handler to show that we are listening and ready.
//
app.listen(PORT, () => {
  console.log(`Server is listening on PORT=${PORT}`);
});