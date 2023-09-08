// import React, { useState } from 'react';
import { FormBlockDiv, Input, Label } from './Login.styled';

const LogInForm = () => {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  // const handleSubmit = e => {
  //   e.preventDefult();

  //   const 






  // };

  // const handleChange = e => {
  //   const { name, value } = e.target;
  //   if (name === 'email') {
  //     setEmail(value);
  //   } else if (name === 'password') {
  //     setPassword(value);
  //   }
  // };

  return (
    <div>
      <h2>LogIn</h2>
      <form>
        <FormBlockDiv>
          <Label htmlFor="username">Your email:</Label>
          <Input
            type="email"
            name="email"
            id="username"
            required
            // onChange={handleChange}
          />
        </FormBlockDiv>
        <FormBlockDiv>
          <Label htmlFor="password">Your password:</Label>
          <Input
            type="password"
            name="password"
            id="password"
            required
            // onChange={handleChange}
          />
        </FormBlockDiv>
        <button type="submit">LogIn</button>
      </form>
    </div>
  );
};

export default LogInForm;
