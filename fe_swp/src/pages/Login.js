import React, { useState } from "react";
import "../styles/Login.css";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      email,
      password,
    });
  };
  return (
    <div className='login'>
      <form onSubmit={handleSubmit}>
        <div className='login_input'>
          <TextField
            fullWidth
            type='email'
            label='Username or Email'
            variant='outlined'
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <br></br>
        <div className='login_input'>
          <TextField
            fullWidth
            type='password'
            label='Password'
            variant='outlined'
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button className='btn-login' type='submit' fullWidth>
          Login
        </Button>
      </form>
    </div>
  );
}

export default Login;
