// react app component with button click counter and side effects
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

export default function SideEffects() {

  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  const [ingredients, setIngredients] = useState([]);

  useEffect(
    () => {
      console.log('i am about to update the title');
      document.title = `${count} times`;

      return;
    }
    , [count] // fill your dependency array with values this side effect depend on
  );

  useEffect(
    () => {
      const intervalReference = setInterval(() => {
        console.log('am i still alive?!');
      }, 1000);
      return () => {
        console.log('i am about to be destroyed');
        clearInterval(intervalReference);
      };
    }
    , [] // empty array means run only once
  );

  useEffect(() => {
    console.log(`about to get data from Andy's API`);
    axios
      .get('https://my-json-server.typicode.com/andydlindsay/chef-andy/ingredients')
      .then(res => {
        console.log('res', res);
        setIngredients(res.data);
      });
      return () => {
        console.log('the API connection is about to be destroyed');
      };
  }, []);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <input 
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
      />
      <ul>
        {ingredients.map( (item, key) => {
          return <li key={key}>{item.name}</li>;
        } )}
      </ul>
    </div>
  );
}
