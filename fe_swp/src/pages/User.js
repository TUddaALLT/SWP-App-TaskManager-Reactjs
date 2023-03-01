import { Button, TextField } from "@mui/material";
import { padding } from "@mui/system";
import React, { useEffect, useState } from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import { ImProfile } from "react-icons/im";
import { RiTeamLine } from "react-icons/ri";
function User() {
  //   const [{ username, password }, setUser] = useState();

  function handleUpdateUser() {}
  const handleInputChange = (event) => {};

  return (
    <React.Fragment>
      <div style={{ display: "flex" }}>
        <div
          style={{
            height: "100vh",
            width: "20vw",
            backgroundColor: "#f7f9fa",
            paddingTop: "5vh",
            paddingLeft: "5vw",
          }}
        >
          <div
            style={{
              marginBottom: "5vh",
              display: "flex",
              justifyContent: "flex-start",
            }}
          >
            <img
              src='https://scontent.fhan2-5.fna.fbcdn.net/v/t39.30808-6/311816848_1453053658537009_7901211323118956372_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=174925&_nc_ohc=0cGqPjxofkQAX-qdRs4&_nc_ht=scontent.fhan2-5.fna&oh=00_AfC8FZuH8xwLwutlkPXaB2_byshBIML8Vu6EnYrCaeWGZA&oe=6402D1F5'
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "20%",
                objectFit: "cover",
                marginBottom: "5px",
              }}
            ></img>
          </div>{" "}
          <div
            style={{
              marginBottom: "5vh",
              display: "flex",
              justifyContent: "flex-start",
            }}
          >
            <h2>Usernamae</h2>
          </div>
          <div
            style={{
              display: "flex",
              width: "50%",
              marginBottom: "2vh",
              cursor: "pointer",
            }}
          >
            <img
              style={{ width: "30px", height: "30px" }}
              src='https://accounts.meister.co/assets/account-8521bd03889259122efcc4b47da57bf89294ae554ea15e19bea4c25fa98daa24.svg'
              kr=''
            />
            <span style={{ marginLeft: "15px" }}>Me</span>
          </div>
          <div
            style={{
              display: "flex",
              width: "50%",
              marginBottom: "2vh",
              cursor: "pointer",
            }}
          >
            <img
              style={{ width: "30px", height: "30px" }}
              src='https://accounts.meister.co/assets/license-743744543dc9182bb0bae0b0443ab5783fd1c08db723df32ebb75402010e24c6.svg'
              kr=''
            />
            <span style={{ marginLeft: "15px" }}>Plans</span>
          </div>
          <div
            style={{
              display: "flex",
              width: "50%",
              marginBottom: "2vh",
              cursor: "pointer",
            }}
          >
            <img
              src='https://accounts.meister.co/assets/team-a09746f77198711dc54e2b6bf4283aa306f351da1ffff1a08babca7a6333242d.svg'
              kr=''
              style={{ width: "30px", height: "30px" }}
            ></img>
            <span style={{ marginLeft: "15px" }}> Team</span>
          </div>
        </div>
        <div style={{ height: "100vh", width: "80vw", paddingTop: "5vh" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginRight: "5vw",
            }}
          >
            <AiFillCheckCircle
              size='30px'
              style={{ color: "rgb(0 170 255)", marginRight: "5px" }}
            ></AiFillCheckCircle>
            <a href='Login' style={{ color: "rgb(0 170 255)" }}>
              Back to home
            </a>
          </div>
          <div style={{ marginLeft: "5vw" }}>
            <form onSubmit={handleUpdateUser}>
              <div className='login_input'>
                <TextField
                  fullWidth
                  type='text'
                  label='update data'
                  variant='outlined'
                  onChange={handleInputChange}
                />
              </div>
              <br></br>
              <div className='login_input'>
                <TextField
                  fullWidth
                  type='text'
                  label='update data'
                  variant='outlined'
                  onChange={handleInputChange}
                />
              </div>
              <br></br>
              <div className='login_input'>
                <TextField
                  fullWidth
                  type='text'
                  label='update data'
                  variant='outlined'
                  onChange={handleInputChange}
                />
              </div>
              <br></br>
              <div className='login_input'>
                <TextField
                  fullWidth
                  type='text'
                  label='update data'
                  variant='outlined'
                  onChange={handleInputChange}
                />
              </div>
              <br></br>
              <div className='login_input'>
                <TextField
                  fullWidth
                  type='text'
                  variant='outlined'
                  id='outlined-multiline-static'
                  label='Multiline'
                  multiline
                  rows={4}
                  onChange={handleInputChange}
                />
              </div>

              <Button
                className='btn-login'
                type='submit'
                fullWidth
                style={{ marginBottom: "20px", color: "white" }}
              >
                Save changes
              </Button>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default User;
