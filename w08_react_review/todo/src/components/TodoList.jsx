import React from 'react';
import { useState, useEffect } from 'react';
import Todo from './Todo';
import axios from 'axios';

const TodoList = () => {

  const [todos, setTodos] = useState([]);

  const toggleDone = (index) => {
    console.log('toggleDone index', index);
    console.log('original todos', todos);
//    const newTodos = [...todos]; // BAD
//    newTodos = structuredClone(todos); // SUPPORT?
// let newTodos = JSON.parse(JSON.stringify(todos)); // EASY, SLOW BUT ROBUST
const newTodos = todos.map(a => {return {...a}});

    newTodos[index].done = !newTodos[index].done;

    console.log('modified todos', newTodos);
    console.log('original todos', todos);
    setTodos(newTodos);
  };

  useEffect(() => {
    axios.get('/todos')
    .then((result) => {
      console.log('result', result);
      setTodos(result.data);
    })
    .catch((error) => {
      console.log('error', error);
    });
  }, []);

  let doneCount = 0;
  todos.forEach((item) => {
    if (item.done){
      doneCount++;
    }
  });

  return (
    <>
      <h3>TodoList</h3>
      <ul>
        { todos.map( (item, index) => <Todo key={index} index={index} toggleDone={toggleDone} done={item.done} description={item.description}/>) }
      </ul>
      <p>Number Done: {doneCount}</p>
      <p>Total: {todos.length}</p>
    </>
  );
};

export default TodoList;