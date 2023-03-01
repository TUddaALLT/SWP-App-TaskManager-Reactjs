import { List, ListItemButton, ListItemText } from "@mui/material";
import { BsThreeDots } from "react-icons/bs";
import React from "react";

const DisplayProject = (props) => {
  const listProject = props.listProject;
  const handleDeleteProject = props.handleDeleteProject;
  const handleActive = props.handleActive;
  const showProject = listProject.map((element, index) => {
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
          onClick={() => handleDeleteProject(element.id)}
        />
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
