import { Box, Button, Collapse, Modal, TextField } from "@mui/material";
import { React, useState } from "react";
import { BiHomeAlt } from "react-icons/bi";
import { FaRegCalendarAlt } from "react-icons/fa";
import { BsFileEarmarkBarGraph } from "react-icons/bs";
import { GoDashboard, GoFileDirectory } from "react-icons/go";
import { AiOutlineDown, AiOutlinePlus, AiOutlineRight } from "react-icons/ai";
import DisplayProject from "./DisplayProject";
import "../styles/Navigation.css";
import Dashboard from "./../pages/Dashboard";
import Calendar from "./../pages/Calendar";
import Report from "./../pages/Report";
import Project from "../pages/Project";
import ModalCreateTask from "./ModalCreateTask";
import ModalCreateProject from "./ModalCreateProject";

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
  const [content, setContent] = useState(0);
  const [target, setTarget] = useState("");

  const [listProject, setListProject] = useState([
    { id: 1, name: "project1" },
    { id: 2, name: "project2" },
    { id: 3, name: "project3" },
  ]);
  const handleDeleteProject = (key) => {
    setListProject(
      listProject.filter((element) => {
        return element.id !== key;
      }),
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
    listProject.push({ name: name, description: description });
    // call api create project
    console.log({ name: name, description: description });
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
  console.log(content);
  function handleContent(num) {
    setContent(num);
  }
  return (
    <>
      <div className='nav-bar' style={{ borderRight: "2px solid gray" }}>
        <ul className='navbar-menu'>
          <li>
            <div
              className='link isActive'
              onClick={() => {
                handleActive(0, "link");
                handleContent(0);
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <AiOutlineDown className='icons-nav hide' />
                <BiHomeAlt className='icons-nav' size='30px' />
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginLeft: "10px",
                  }}
                >
                  <h4>Dashboard</h4>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div
              className='link'
              onClick={() => {
                handleActive(1, "link");
                handleContent(1);
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <AiOutlineDown className='icons-nav hide' />
                <FaRegCalendarAlt className='icons-nav' />
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginLeft: "10px",
                  }}
                >
                  <h4>Calendar</h4>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div
              className='link'
              onClick={() => {
                handleActive(2, "link");
                handleContent(2);
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <AiOutlineDown className='icons-nav hide' />
                <BsFileEarmarkBarGraph className='icons-nav' />
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginLeft: "10px",
                  }}
                >
                  <h4>Report</h4>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div
              className='link'
              onClick={() => {
                handleActive(3, "link");
                handleContent(3);
              }}
            >
              <div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  {open ? (
                    <AiOutlineDown
                      className='icons-nav-d'
                      onClick={() => {
                        handleOpen();
                      }}
                    />
                  ) : (
                    <AiOutlineRight
                      className='icons-nav-d'
                      onClick={() => {
                        handleOpen();
                      }}
                    />
                  )}
                  <GoFileDirectory className='icons-nav' />
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginLeft: "10px",
                    }}
                  >
                    <h4> Project's</h4>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <AiOutlinePlus
                        className='icons-nav plus'
                        onClick={() => {
                          handleOpenModal();
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <Collapse in={open} timeout='auto'>
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
        <ModalCreateProject
          openModal={openModal}
          setOpenModal={setOpenModal}
        ></ModalCreateProject>
      </div>
      {content == 0 && <Dashboard></Dashboard>}
      {content == 1 && <Calendar></Calendar>}
      {content == 2 && <Report></Report>}
      {content == 3 && <Project></Project>}
    </>
  );
};
export default Navigation;
