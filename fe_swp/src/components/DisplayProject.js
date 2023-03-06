import {
  Box,
  Button,
  List,
  ListItemButton,
  ListItemText,
  Modal,
} from "@mui/material";
import { BsThreeDots } from "react-icons/bs";
import React, { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "30%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};
const DisplayProject = (props) => {
  const listProject = props.listProject;
  const handleDeleteProject = props.handleDeleteProject;
  const handleActive = props.handleActive;

  const handleDelete = () => {
    prompt("Hello");
  };

  const showProject = listProject.map((element, index) => {
    const handleOpentMenu = (id) => {
      let a = document.getElementById(id);
      if (a.style.display === "block") {
        a.style.display = "none";
        // document
        //   .getElementsByClassName("content")[0]
        //   .removeEventListener("click");
      } else {
        a.style.display = "block";

        // document
        //   .getElementsByClassName("content")[0]
        //   .addEventListener("click", () => handleOnClick(id));
      }
    };

    return (
      <ListItemButton
        sx={{ pl: 10, color: "#ADADAD" }}
        key={element.id}
        className="listitems"
        onClick={() => {
          handleActive(index, "listitems");
        }}
      >
        <ListItemText primary={element.name} />
        <BsThreeDots
          className="icons-setting"
          onClick={() => handleOpentMenu(element.id + "project")}
        />
        <div className="menu_project" id={element.id + "project"}>
          <ul>
            <li
              style={{ color: "red" }}
              onClick={() => handleDeleteProject(element.id)}
            >
              Delete
            </li>
          </ul>
        </div>
      </ListItemButton>
    );
  });

  return (
    <>
      <List component="div" disablePadding>
        {showProject}
      </List>
    </>
  );
};
export default DisplayProject;
