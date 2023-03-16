import React, { useState, useEffect } from "react";
import "../styles/ProjectDetails.css";
import authAxios from "../services/AxiosInstance";
import "../styles/Project.css";
import "../styles/Section.css";
import { AiOutlinePlus } from "react-icons/ai";
import { Button } from "@mui/material";

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
    setOpened(!opened);
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
          `/Section/${props.section.id}?userID=${localStorage.getItem("id")}`,
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
  return (
    <div className='section'>
      <div className='section_name '>
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
        </div>{" "}
      </div>
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
            <textarea
              className='describe'
              placeholder='Describe'
              rows={4}
              maxLength={100}
            ></textarea>
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
