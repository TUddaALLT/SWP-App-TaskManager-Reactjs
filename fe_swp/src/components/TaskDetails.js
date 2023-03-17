import React, { useState } from "react";
import "../styles/TaskDetails.css";
import {
  BsFillPinAngleFill,
  BsThreeDots,
  BsCheckLg,
  BsXLg,
} from "react-icons/bs";
import authAxios from "../services/AxiosInstance";
const TaskDetails = (props) => {
  const taskdetail = props.taskdetail;
  console.log(taskdetail);
  const setTaskdetail = props.setTaskdetail;
  const getColor = props.getColor;
  const [edit, setEdit] = useState(false);
  const listTag = [
    { id: "1", name: "tag1" },
    { id: "2", name: "tag2" },
    { id: "3", name: "tag3" },
    { id: "4", name: "tag4" },
  ];

  async function handleOnpin(id) {
    await authAxios
      .put(
        `/Task/UpdatePinTask?taskID=${id}&userID=${localStorage.getItem(
          "id"
        )}&status=${!taskdetail.pinTask}`
      )
      .then(function (response) {
        console.log(response.data);
        if (response.data.data == null) {
          alert("You are not allowed to Pin");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  const hangleOnFinish = (id) => {
    //status task = true
  };
  const onEdit = () => {
    setEdit(true);
  };
  const onSave = (id) => {
    //update
    setEdit(false);
  };
  async function handleOnDelete(id) {
    //delete
    await authAxios
      .delete(`/Task/${id}?userID=${localStorage.getItem("id")}`)
      .then(function (response) {})
      .catch(function (error) {
        console.log(error);
      });
    props.setCheck(!props.check);
    setTaskdetail(null);
  }
  const handleOnShow = () => {
    let a = document.getElementById(taskdetail.id);

    if (a.style.display === "block") {
      a.style.display = "none";
    } else {
      a.style.display = "block";
    }
  };
  const changeDate = (dt) => {
    let date = new Date(dt);
    return date.toISOString().substring(0, 10);
  };

  return edit == false ? (
    <div className="content">
      <div className="tasksdetail">
        <div className="taskheader">
          <h1>{taskdetail.title}</h1>
          <div id="icon_tasks">
            <BsFillPinAngleFill
              className="icons_task"
              style={{ color: taskdetail.pinTask ? "red" : "black" }}
              onClick={() => {
                handleOnpin(taskdetail.id);
              }}
            />
            <BsCheckLg
              className="icons_task"
              style={{
                color: "green",
                display:
                  getColor(taskdetail.taskTo, taskdetail.status) === "green"
                    ? "none"
                    : "",
              }}
              onClick={() => {
                hangleOnFinish(taskdetail.id);
              }}
            />
            <BsThreeDots
              className="icons_task"
              onClick={() => {
                handleOnShow();
              }}
            />
            <div className="menu_task" id={taskdetail.id}>
              <ul>
                <li
                  onClick={() => {
                    onEdit(taskdetail.id);
                  }}
                >
                  Edit
                </li>
                <li
                  onClick={() => {
                    handleOnDelete(taskdetail.id);
                  }}
                  style={{ color: "red" }}
                >
                  Delete
                </li>
              </ul>
            </div>
            <BsXLg
              className="icons_task"
              onClick={() => {
                setTaskdetail();
              }}
            />
          </div>
        </div>
        <div className="taskcontent">
          <div className="left">
            <h3 className="tag">
              Tag:
              <span style={{ marginLeft: "10px", fontWeight: "normal" }}>
                {taskdetail.tagID == null ? "None" : taskdetail.tagID}
              </span>
            </h3>
            <h3 className="status">
              Status:
              <span
                style={{
                  color: getColor(taskdetail.taskTo, taskdetail.status),
                  marginLeft: "10px",
                }}
              >
                {getColor(taskdetail.taskTo, taskdetail.status) === "red"
                  ? "Overdue"
                  : getColor(taskdetail.taskTo, taskdetail.status) === "green"
                  ? "Finish"
                  : "To be doing"}
              </span>
            </h3>

            <div className="des">
              <h3>Desctiption</h3>
              <p>{taskdetail.describe}</p>
              <p>{taskdetail.attachment}</p>
            </div>
          </div>
          <div className="right">
            <div className="time_tas">
              <h4>
                From: <span>{changeDate(taskdetail.taskFrom)}</span>
              </h4>
              <h4>
                To: <span>{changeDate(taskdetail.taskTo)}</span>
              </h4>
            </div>
            {taskdetail.info != null && (
              <div className="projectinfo">
                <div>
                  From User <span>{taskdetail.info.user}</span>
                </div>
                <div>
                  From Section <span>{taskdetail.info.section}</span>
                </div>
                <div>
                  From Project <span>{taskdetail.info.workSpace}</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="content">
      <div className="tasksdetail">
        <div className="taskheader">
          <h1>
            <input
              className="input_title"
              name="title"
              defaultValue={taskdetail.title}
            />
          </h1>
          <div id="icon_tasks">
            <BsFillPinAngleFill
              className="icons_task"
              style={{ color: taskdetail.pinTask ? "red" : "black" }}
              onClick={() => {
                handleOnpin(taskdetail.id);
              }}
            />
            <BsCheckLg
              className="icons_task"
              style={{
                color: "green",
                display:
                  getColor(taskdetail.TaskTo, taskdetail.status) === "green"
                    ? "none"
                    : "",
              }}
              onClick={() => {
                hangleOnFinish(taskdetail.id);
              }}
            />
            <BsThreeDots
              className="icons_task"
              onClick={() => {
                handleOnShow();
              }}
            />
            <div className="menu_task" id={taskdetail.id}>
              <ul>
                {edit === false ? (
                  <li
                    onClick={() => {
                      onEdit(taskdetail.id);
                    }}
                  >
                    Edit
                  </li>
                ) : (
                  <li
                    onClick={() => {
                      onSave(taskdetail.id);
                    }}
                  >
                    Save
                  </li>
                )}

                <li style={{ color: "red" }}>Delete</li>
              </ul>
            </div>
            <BsXLg
              className="icons_task"
              onClick={() => {
                setTaskdetail(null);
              }}
            />
          </div>
        </div>
        <div className="taskcontent">
          <div className="left">
            <h3 className="tag">
              Tag:
              <select
                name="tag"
                defaultValue={taskdetail.tagID}
                className="tagh3"
              >
                <option value="">None</option>
                {listTag != null &&
                  listTag.map((tag) => {
                    return <option value={tag.id}>{tag.name}</option>;
                  })}
              </select>
            </h3>
            <h3 className="status">
              Status:
              <span
                style={{
                  color: getColor(taskdetail.taskTo, taskdetail.status),
                  marginLeft: "10px",
                }}
              >
                {getColor(taskdetail.taskTo, taskdetail.status) === "red"
                  ? "Overdue"
                  : getColor(taskdetail.taskTo, taskdetail.status) === "green"
                  ? "Finish"
                  : "To be doing"}
              </span>
            </h3>

            <div className="des">
              <h3>Desctiption</h3>
              <textarea
                className="textare"
                name="descrip"
                defaultValue={taskdetail.description}
                rows={8}
              ></textarea>
            </div>
          </div>
          <div className="right">
            <div className="time_tas">
              <h4>
                From:
                <input
                  className="tagh4"
                  type="date"
                  name="From"
                  defaultValue={changeDate(taskdetail.taskFrom)}
                />
              </h4>
              <h4>
                To:
                <input
                  className="tagh4"
                  type="date"
                  name="to"
                  defaultValue={changeDate(taskdetail.taskTo)}
                />
              </h4>
            </div>
            {taskdetail.info != null && (
              <div className="projectinfo">
                <div>
                  From User <span>{taskdetail.info.user}</span>
                </div>
                <div>
                  From Section <span>{taskdetail.info.section}</span>
                </div>
                <div>
                  From Project <span>{taskdetail.info.workSpace}</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskDetails;
