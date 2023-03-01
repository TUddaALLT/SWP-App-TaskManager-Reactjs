import React, { useState } from "react";
import "../styles/Register.css";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const handleRegister = (e) => {
    e.preventDefault();
    console.log({
      email,
      password,
      confirmPassword,
    });
    if (password.localeCompare(confirmPassword) != 0) {
      setMessage("Confirm password must match password");
    } else {
      setMessage("");
    }
    axios
      .post("https://localhost:7239/api/User/Register", {
        Username: email,
        Password: password,
      })
      .then(function (response) {
        console.log(response.data.data.token);
        localStorage.setItem("token", response.data.data.token);
      })
      .catch(function (error) {
        console.log(error);
        localStorage.removeItem("token");
      });
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <h1 style={{ padding: "1vh 2vw" }} s>
          Stock Task
        </h1>
        <Link
          to={"../login"}
          style={{
            padding: "1vh 2vw",
            textDecoration: "none",
            color: "rgb(0 170 255)",
          }}
        >
          Login
        </Link>
      </div>
      <div className='Register'>
        <form onSubmit={handleRegister}>
          <h2>Register</h2>
          <br></br>
          <div className='Register_input'>
            <TextField
              fullWidth
              type='email'
              label='Username or Email'
              variant='outlined'
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <br></br>
          <div className='Register_input'>
            <TextField
              fullWidth
              type='password'
              label='Password'
              variant='outlined'
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <br></br>
          <div className='Register_input'>
            <TextField
              fullWidth
              type='password'
              label='Confirm Password'
              variant='outlined'
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <br></br>
          <h3 style={{ color: "red" }}>{message}</h3>
          <Button
            className='btn-Register'
            type='submit'
            fullWidth
            style={{ marginBottom: "20px", color: "white" }}
          >
            Register
          </Button>
          <a
            href='Login'
            style={{
              textDecoration: "none",
              margin: "20px 0",
              color: "rgb(0 170 255)",
            }}
          >
            You have account ? go to Login
          </a>
        </form>
      </div>
    </div>
  );
}

export default Register;
