import React, { useState } from "react";
import { ImSearch } from "react-icons/im";
import { RiNotification3Fill } from "react-icons/ri";
import { BiLockAlt, BiUser } from "react-icons/bi";
import { AiOutlineDown } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
function Header() {
  const [opened, setOpened] = useState(false);
  const navigate = useNavigate();

  function openUser() {
    setOpened(!opened);
  }

  function logout() {
    localStorage.removeItem("token");
    navigate("../login");
  }
  function updateUser() {
    navigate("../user");
  }
  return (
    <div
      className='header'
      style={{
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "white",
        height: "8vh",
        borderBottom: "2px solid gray",
      }}
    >
      {opened && (
        <div
          style={{
            width: "120px",
            height: "fit-content",
            display: "flex",
            justifyContent: "center",
            backgroundColor: "whitesmoke",
            borderRadius: "5px",
            position: "absolute",
            right: "80px",
            zIndex: "10",
            top: "55px",
            border: "1px solid gray",
          }}
        >
          <ul style={{ listStyle: "none" }}>
            <li className='userNav'>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
                onClick={updateUser}
              >
                <BiUser size='20px' className='icon'></BiUser>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <span>Profile</span>
                </div>
              </div>
            </li>
            <li className='userNav'>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
                onClick={logout}
              >
                <BiLockAlt size='20px' className='icon' />
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <span>Log out</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      )}

      <h1 style={{ padding: "1vh 2vw", cursor: "pointer" }}>Stock Task</h1>
      <div
        style={{ display: "flex", alignItems: "center", marginRight: "30vw" }}
      >
        <input
          type='text'
          style={{
            width: "20vw",
            height: "5vh",
            borderRadius: "8px",
            borderColor: "blueviolet",
          }}
          //   onChange={(e) => setEmail(e.target.value)}
        />
        <ImSearch
          className='icon'
          style={{ position: "relative", right: "30px" }}
        ></ImSearch>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginRight: "5vw",
          width: "8vw",
        }}
      >
        <RiNotification3Fill size='25px' className='icon'></RiNotification3Fill>
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
          onClick={openUser}
        >
          <BiUser size='25px' className='icon'></BiUser>
          <AiOutlineDown size='20px' className='icon'></AiOutlineDown>
        </div>
      </div>
    </div>
  );
}

export default Header;
