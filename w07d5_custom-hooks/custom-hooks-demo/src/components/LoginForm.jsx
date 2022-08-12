import React from 'react';
import useInput from '../hooks/useInput';

const LoginForm = () => {

  const username = useInput('');
  const password = useInput('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks for logging in as ${username.value} and ${password.value}`);
  };

  return (
    <form onSubmit = {handleSubmit}>
      <input type="text" id="username" {...username} />
      <input type="password" id="password" {...password} />
      <button type="submit">Login</button>
    </form>
  );

};

export default LoginForm;