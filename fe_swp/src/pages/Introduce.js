import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Introduce = () => {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        {" "}
        <Button
          style={{ backgroundColor: "rgb(0 170 255)", margin: "2vh 2vw" }}
        >
          <Link
            to={"../login"}
            style={{
              padding: "1vh 2vw",
              textDecoration: "none",
            }}
          >
            Login
          </Link>
        </Button>
      </div>{" "}
      <div style={{ padding: "25vh 25vw", overflow: "hidden" }}>
        <img src='https://cdn3.meistertask.com/assets/content/general/mt-illustration-device-group-ffd742222ff3e5cdc64bcdc107ba7299e540763ff50e2cf4c2f1667f2d147d3b.svg'></img>
      </div>
    </>
  );
};

export default Introduce;
