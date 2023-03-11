import React, { useState } from "react";
import ModalCreateTask from "../components/ModalCreateTask";
import "../styles/MyTasks.css";
function MyTasks() {
  const listTask1 = [
    {
      id: "1",
      sectionID: "",
      title: "Task 1",
      description:
        "Task này sắp đến hạn rồi bé ơi Task này sắp đến hạn rồi bé ơi đúng nhận sai cãi",
      image: "",
      status: true,
      createTime: "",
      TaskTo: "2023/03/19",
      TaskFrom: "2023/03/01",
      PinTask: true,
      TagID: "",
      Attachment: "",
    },
    {
      id: "2",
      sectionID: "",
      title: "Task 2",
      description: "Hello đây là task 2",
      image: "",
      status: false,
      createTime: "",
      TaskTo: "2023/03/20",
      TaskFrom: "2023/02/19",
      PinTask: true,
      TagID: "",
      Attachment: "",
    },
    {
      id: "3",
      sectionID: "",
      title: "Task 3",
      description:
        "Task này sắp đến hạn rồi bé ơi Task này sắp đến hạn rồi bé ơi đúng nhận sai cãi",
      image: "",
      status: false,
      createTime: "",
      TaskTo: "2023/03/10",
      TaskFrom: "2023/03/01",
      PinTask: true,
      TagID: "",
      Attachment: "",
    },
    {
      id: "4",
      sectionID: "",
      title: "Task 4",
      description:
        "Task này sắp đến hạn rồi bé ơi Task này sắp đến hạn rồi bé ơi đúng nhận sai cãi",
      image: "",
      status: false,
      createTime: "",
      TaskTo: "2023/04/12",
      TaskFrom: "2023/03/01",
      PinTask: true,
      TagID: "",
      Attachment: "",
    },
  ];
  const [openModal, setOpenModal] = useState(false);
  const [listTask, setListTask] = useState(listTask1);

  const getcolor = (dateTo, status) => {
    const currentDate = new Date();
    const date1 = new Date(dateTo);
    if (status) return "green";
    else {
      if (date1.getTime() >= currentDate.getTime()) return "black";
      else if (date1.getTime() < currentDate.getTime()) return "red";
    }
  };
  const handleOnChange = (id) => {
    let newA = [...listTask];
    let a = newA.find((element) => {
      return element.id === id;
    }).status;
    newA.forEach((element) => {
      if (element.id === id) element.status = !a;
    });
    setListTask(newA);
  };

  return (
    <div className="content">
      <div className="personal-task">
        <h1>List of Tasks</h1>
        <div className="content-header">
          <span
            id="buttonOpenModal"
            onClick={() => {
              setOpenModal(true);
            }}
          >
            Create new Task
          </span>
          <ModalCreateTask openModal={openModal} setOpenModal={setOpenModal} />
        </div>
        <div className="listTaskall">
          {listTask.map((element) => {
            return (
              <div
                className="taskDetail"
                key={element.id}
                style={{
                  border:
                    "1px solid " + getcolor(element.TaskTo, element.status),
                }}
              >
                <input
                  type="checkbox"
                  defaultChecked={element.status}
                  onChange={() => handleOnChange(element.id)}
                />
                <h4
                  style={{
                    color: getcolor(element.TaskTo, element.status),
                  }}
                >
                  {element.title}
                </h4>
                <p>Time Limited: {element.TaskTo}</p>
                <p>Project: None</p>
                <p
                  style={{
                    color: getcolor(element.TaskTo, element.status),
                  }}
                >
                  {getcolor(element.TaskTo, element.status) === "red"
                    ? "Overdue"
                    : getcolor(element.TaskTo, element.status) === "green"
                    ? "Finish"
                    : "To be doing"}
                </p>
                {/* <p>Status:{element.status ? "blue" : {element.TaskTo}}</p> */}
              </div>
            );
          })}
        </div>
      </div>
      <div className="listTaskProject"></div>
    </div>
  );
}

export default MyTasks;
