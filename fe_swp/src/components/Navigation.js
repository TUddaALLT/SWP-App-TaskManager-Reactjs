import { Box, Button, Collapse, Modal, TextField } from "@mui/material";
import { Link as LinkRouter } from "react-router-dom";
import { React, useState } from "react";
import { BiHomeAlt } from "react-icons/bi";
import { FaRegCalendarAlt } from "react-icons/fa";
import { BsFileEarmarkBarGraph } from "react-icons/bs";
import { GoFileDirectory } from "react-icons/go";
import "../styles/NavBar.css";
import { AiOutlineDown, AiOutlinePlus, AiOutlineRight } from "react-icons/ai";
import DisplayProject from "./DisplayProject";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const Navigation = (props) => {
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [listProject, setListProject] = useState([
    { id: 1, name: "project1" },
    { id: 2, name: "project2" },
    { id: 3, name: "project3" },
  ]);
  const handleDeleteProject = (key) => {
    setListProject(
      listProject.filter((element) => {
        return element.id !== key;
      })
    );
  };
  const handleOpen = () => {
    setOpen(!open);
  };
  const handleOpenModal = () => {
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
    setName("");
    setDescription("");
  };
  const handleSubmitModal = () => {
    listProject.push({ id: 5, name: name });
    setName("");
    setDescription("");
  };

  const handleOnChangeName = (event) => {
    setName(event.target.value);
  };
  const handleOnChangeDes = (event) => {
    setDescription(event.target.value);
  };
  const handleActive = (num, target) => {
    let lists = document.getElementsByClassName(target);
    let current = lists[num];
    for (const iterator of lists) {
      iterator.classList.remove("isActive");
    }
    current.classList.add("isActive");
  };
  return (
    <div className="nav-bar">
      <ul className="navbar-menu">
        <li>
          <div
            className="link"
            onClick={() => {
              handleActive(0, "link");
            }}
          >
            <LinkRouter to={"/dashboard"} className="router-link">
              <div>
                <AiOutlineDown className="icons-nav hide" />
                <BiHomeAlt className="icons-nav" />
                <span>Dashboard</span>
              </div>
            </LinkRouter>
          </div>
        </li>
        <li>
          <div
            className="link"
            onClick={() => {
              handleActive(1, "link");
            }}
          >
            <LinkRouter to={"/calendar"} className="router-link">
              <div>
                <AiOutlineDown className="icons-nav hide" />
                <FaRegCalendarAlt className="icons-nav" />
                <span>Calendar</span>
              </div>
            </LinkRouter>
          </div>
        </li>
        <li>
          <div
            className="link"
            onClick={() => {
              handleActive(2, "link");
            }}
          >
            <LinkRouter to={"/report"} className="router-link">
              <div>
                <AiOutlineDown className="icons-nav hide" />
                <BsFileEarmarkBarGraph className="icons-nav" />
                <span>Report</span>
              </div>
            </LinkRouter>
          </div>
        </li>
        <li>
          <div
            className="link"
            onClick={() => {
              handleActive(3, "link");
            }}
          >
            <LinkRouter className="router-link">
              <div>
                {open ? (
                  <AiOutlineDown
                    className="icons-nav-d"
                    onClick={() => {
                      handleOpen();
                    }}
                  />
                ) : (
                  <AiOutlineRight
                    className="icons-nav-d"
                    onClick={() => {
                      handleOpen();
                    }}
                  />
                )}
                <GoFileDirectory className="icons-nav" />
                <span>Your Project</span>

                <AiOutlinePlus
                  className="icons-nav plus"
                  onClick={() => {
                    handleOpenModal();
                  }}
                />
              </div>
            </LinkRouter>
          </div>
        </li>
        <Collapse in={open} timeout="auto">
          {listProject.length === 0 ? (
            <h4>No Project</h4>
          ) : (
            <DisplayProject
              listProject={listProject}
              handleDeleteProject={handleDeleteProject}
              handleActive={handleActive}
            />
          )}
        </Collapse>
      </ul>
      <Modal open={openModal} onClose={handleCloseModal}>
        <Box sx={{ ...style, borderRadius: 3 }}>
          <h2 id="modal-header">New Project</h2>
          <div id="modal-content">
            <div className="project-name">
              <TextField
                fullwidth
                sx={{ width: "100%" }}
                type="text"
                label="Name"
                variant="outlined"
                onChange={(event) => handleOnChangeName(event)}
              />
            </div>
            <div className="project-description">
              <TextField
                fullwidth
                sx={{ width: "100%" }}
                type="text"
                label="Description"
                variant="outlined"
                multiline
                maxRows={5}
                rows={5}
                onChange={(event) => handleOnChangeDes(event)}
              />
            </div>
          </div>
          <div id="modal-footer">
            <Button
              variant="outlined"
              color="error"
              onClick={handleCloseModal}
              sx={{ margin: "0 20px" }}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              disabled={name === "" ? true : false}
              onClick={() => {
                handleSubmitModal();
                handleCloseModal();
              }}
            >
              Create
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};
export default Navigation;
