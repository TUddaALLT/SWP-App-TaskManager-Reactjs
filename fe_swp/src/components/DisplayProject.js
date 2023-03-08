import { List, ListItemButton, ListItemText } from "@mui/material";
import { BsThreeDots } from "react-icons/bs";

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

  const showProject = listProject.map((element, index) => {
    const handleOpentMenu = (id) => {
      let a = document.getElementById(id);
      if (a.style.display === "block") {
        a.style.display = "none";
      } else {
        a.style.display = "block";
      }
    };

    return (
      <ListItemButton
        sx={{ pl: 10, color: "#ADADAD" }}
        key={element.name}
        className='listitems'
        onClick={() => {
          handleActive(index, "listitems");
        }}
      >
        <ListItemText primary={element.name} />
        <BsThreeDots
          className='icons-setting'
          onClick={() => handleOpentMenu(element.id + "project")}
        />
        <div className='menu_project' id={element.id + "project"}>
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
      <List component='div' disablePadding>
        {showProject}
      </List>
    </>
  );
};
export default DisplayProject;
