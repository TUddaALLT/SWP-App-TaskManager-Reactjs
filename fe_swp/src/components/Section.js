import React, { useState, useEffect } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { BsFillPencilFill } from "react-icons/bs";
import ModalCreateProject from "../components/ModalCreateProject";
import "../styles/ProjectDetails.css";
import authAxios from "../services/AxiosInstance";
import "../styles/Project.css";
import "../styles/Section.css";

import { Button, Input, TextField } from "@mui/material";

function Section(props) {
  const [opened, setOpened] = useState(false);
  const [done, setDone] = useState(true);
  const [tasks, setTasks] = useState();

  function openAddTaskProject() {
    console.log(props);
    setOpened(!opened);
  }
  async function addTaskProject() {
    const title = document.querySelector(".title").value;
    const describe = document.querySelector(".describe").value;
    const taskFrom = document.querySelector(".From").value;
    const taskTo = document.querySelector(".to").value;
    await authAxios
      .post(`/Task?userID=${localStorage.getItem("id")}&roleID=1`, {
        sectionId: props.section.id,
        title: title,
        describe: describe,
        taskFrom: taskFrom,
        taskTo: taskTo,
      })
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    setDone(!done);
  }
  useEffect(() => {
    authAxios
      .get(`/Task/GetTasksInSection?sectionId=${props.section.id}`)
      .then(function (response) {
        console.log(response.data.data);
        const data = response.data.data.sort((a, b) => b.id - a.id);
        setTasks(data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [done]);
  return (
    <div className='section'>
      <div className='section_name'>{props.section.title}</div>
      <div className='content_section'>
        {tasks != null &&
          tasks.map((task) => (
            <div key={task.id} className='task'>
              <div>{task.title}</div>
              <div>{task.describe}</div>
              <div>{task.taskFrom}</div>
              <div>{task.taskTo}</div>
            </div>
          ))}
        <div className='btnOpen' onClick={openAddTaskProject}>
          {opened ? "X" : <AiOutlinePlus></AiOutlinePlus>}
        </div>
        {opened && (
          <div className='frmAdd'>
            <input
              autoFocus='true'
              className='title'
              placeholder='Title'
            ></input>
            <input className='describe' placeholder='Describe'></input>
            <span>From:</span> <input className='From' type='date' />
            <span>To:</span> <input className='to' type='date'></input>
            <Button size='small' onClick={() => addTaskProject()}>
              Add Task
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Section;
