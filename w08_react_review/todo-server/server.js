const express = require('express');

const app = express();

//
// Database
//
const todos = [
  {description: 'loaf of bread', done: false},
  {description: 'container of milk', done: false},
  {description: 'stick of butter', done: false},
];

app.get('/todos', (req,res) => {
  res.json(todos);
});

app.listen(8089, () => {console.log(`Server is listening on 8089`)});
