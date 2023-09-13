// import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FormBlockDiv, Input, Label } from './Login.styled';
import { logIn } from 'redux/auth/operationsAuth';
import { useState } from 'react';

const LogInForm = () => {

  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(logIn({ email, password }));
  };

  const handleChange = e => {
    const { name, value } = e.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  return (
    <div>
      <h2>LogIn</h2>
      <form onSubmit={handleSubmit}>
        <FormBlockDiv>
          <Label htmlFor="username">Your email:</Label>
          <Input
            type="email"
            name="email"
            id="username"
            required
            onChange={handleChange}
          />
        </FormBlockDiv>
        <FormBlockDiv>
          <Label htmlFor="password">Your password:</Label>
          <Input
            type="password"
            name="password"
            id="password"
            required
            onChange={handleChange}
          />
        </FormBlockDiv>
        <button type="submit">LogIn</button>
      </form>
    </div>
  );
};

export default LogInForm;
