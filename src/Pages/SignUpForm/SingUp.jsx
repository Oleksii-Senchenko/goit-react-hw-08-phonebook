import React, { useState } from 'react';
import { FormBlockDiv, Innput, Laabel } from './SingUp.styled';
import { useDispatch } from 'react-redux';
import { registerUser } from 'redux/operations';

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    if (name === 'text') {
      setName(value);
    } else if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(name, email, password);
    dispatch(registerUser({name, email, password})); 
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h2>SignIn</h2>
      <form onSubmit={handleSubmit}>
        <FormBlockDiv>
          <Laabel htmlFor="username">Your name:</Laabel>
          <Innput
            type="text"
            id="username"
            name="text"
            value={name}
            onChange={handleChange}
            required
          />
        </FormBlockDiv>
        <FormBlockDiv>
          <Laabel htmlFor="email">Your email:</Laabel>
          <Innput
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleChange}
            required
          />
        </FormBlockDiv>
        <FormBlockDiv>
          <Laabel htmlFor="password">Your password:</Laabel>
          <Innput
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handleChange}
            required
          />
        </FormBlockDiv>
        <button type="submit">SignIn</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
