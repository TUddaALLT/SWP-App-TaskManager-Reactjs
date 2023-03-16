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
        // const data = response.data.data.sort((a, b) => b.id - a.id);
        setTasks(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [done]);
  async function deleteSection(id) {
    if (window.confirm("Are you sure you want to delete this section")) {
      // /Section/19?userID=1
      await authAxios
        .delete(
          `/Section/${props.section.id}?userID=${localStorage.getItem("id")}`
        )
        .then(function (response) {
          if (response.data.status == 400) {
            alert("You are not allowed to delete");
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    props.setCheck(!props.check);
  }
  const getcolor = (dateTo, status) => {
    const currentDate = new Date();
    const date1 = new Date(dateTo);
    if (status) return "green";
    else {
      if (date1.getTime() >= currentDate.getTime()) return "orange";
      else if (date1.getTime() < currentDate.getTime()) return "red";
    }
  };
  const changeDate = (dt) => {
    let date = new Date(dt);
    return date.toISOString().substring(0, 10);
  };
  return (
    <div className="section">
      <div className="section_name ">
        {props.section.title}
        <div
          style={{
            padding: "4px 10px",
            borderRadius: "100%",
            backgroundColor: "#df8484",
            cursor: "pointer",
          }}
          onClick={() => deleteSection(props.section.id)}
        >
          X
        </div>
      </div>
      <div className="content_section">
        {tasks != null &&
          tasks.map((task) => (
            <div
              key={task.id}
              className="task"
              style={{
                border: "2px solid " + getcolor(task.taskFrom, task.status),
              }}
            >
              <div
                className="task_title"
                style={{ color: getcolor(task.taskFrom, task.status) }}
              >
                {task.title}
              </div>
              <div className="task_des">{task.describe}</div>
              <div className="task_fromto">
                From: {changeDate(task.taskFrom)} <br />
                To: {changeDate(task.taskTo)}
              </div>
            </div>
          ))}
        <div className="btnOpen" onClick={openAddTaskProject}>
          {opened ? "X" : <AiOutlinePlus></AiOutlinePlus>}
        </div>
        {opened && (
          <div className="frmAdd">
            <input
              autoFocus="true"
              className="title"
              placeholder="Title"
            ></input>
            <textarea
              className="describe"
              placeholder="Describe"
              rows={4}
              maxLength={100}
            ></textarea>
            <span>From:</span> <input className="From" type="date" />
            <span>To:</span> <input className="to" type="date"></input>
            <Button size="small" onClick={() => addTaskProject()}>
              Add Task
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Section;
