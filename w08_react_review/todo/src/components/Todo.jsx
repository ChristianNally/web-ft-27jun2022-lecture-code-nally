import React from 'react';

const Todo = (props) => {
  return (
    <li><input type="checkbox" onChange={() => {props.toggleDone(props.index)}} value={props.done}/> {props.description}</li>
  );
};

export default Todo;