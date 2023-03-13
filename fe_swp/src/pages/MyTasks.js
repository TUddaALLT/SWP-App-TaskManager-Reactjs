import React, { useEffect, useState } from "react";
import ModalCreateTask from "../components/ModalCreateTask";
import TaskDetails from "../components/TaskDetails";
import authAxios from "../services/AxiosInstance";
import "../styles/MyTasks.css";
function MyTasks(props) {
  // const listTask1 = [
  //   {
  //     id: "1",
  //     sectionID: "",
  //     title: "Task 1",
  //     description:
  //       "Task này sắp đến hạn rồi bé ơi Task này sắp đến hạn rồi bé ơi đúng nhận sai cãi",
  //     image: "",
  //     status: true,
  //     createTime: "",
  //     TaskTo: "2023/03/19",
  //     TaskFrom: "2023/03/01",
  //     PinTask: true,
  //     TagID: "",
  //     Attachment: "",
  //   },
  //   {
  //     id: "2",
  //     sectionID: "",
  //     title: "Task 2",
  //     description: "Hello đây là task 2",
  //     image: "",
  //     status: false,
  //     createTime: "",
  //     TaskTo: "2023/03/20",
  //     TaskFrom: "2023/02/19",
  //     PinTask: false,
  //     TagID: "",
  //     Attachment: "",
  //   },
  //   {
  //     id: "3",
  //     sectionID: "",
  //     title: "Task 3",
  //     description:
  //       "Task này sắp đến hạn rồi bé ơi Task này sắp đến hạn rồi bé ơi đúng nhận sai cãi",
  //     image: "",
  //     status: false,
  //     createTime: "",
  //     TaskTo: "2023/03/10",
  //     TaskFrom: "2023/03/01",
  //     PinTask: false,
  //     TagID: "",
  //     Attachment: "",
  //   },
  //   {
  //     id: "4",
  //     sectionID: "",
  //     title: "Task 4",
  //     description:
  //       "Task này sắp đến hạn rồi bé ơi Task này sắp đến hạn rồi bé ơi đúng nhận sai cãi",
  //     image: "",
  //     status: false,
  //     createTime: "",
  //     TaskTo: "2023/04/12",
  //     TaskFrom: "2023/03/01",
  //     PinTask: true,
  //     TagID: "",
  //     Attachment: "",
  //   },
  // ];
  const [openModal, setOpenModal] = useState(false);
  const [listTask, setListTask] = useState();
  const [taskdetail, setTaskdetail] = useState();
  const [check, setCheck] = useState();
  useEffect(() => {
    authAxios
      .get(`/Task/AssignedTasks/${localStorage.getItem("id")}`)
      .then(function (response) {
        console.log(response.data.data);
        setListTask(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [check]);
  const getcolor = (dateTo, status) => {
    const currentDate = new Date();
    const date1 = new Date(dateTo);
    if (status) return "green";
    else {
      if (date1.getTime() >= currentDate.getTime()) return "black";
      else if (date1.getTime() < currentDate.getTime()) return "red";
    }
  };
  // const handleOnChange = (id) => {
  //   let newA = [...listTask];
  //   let a = newA.find((element) => {
  //     return element.id === id;
  //   }).status;
  //   newA.forEach((element) => {
  //     if (element.id === id) element.status = !a;
  //   });
  //   setListTask(newA);
  // };
  const handleOnTaskDetails = (alo) => {
    setTaskdetail(alo);
  };
  return taskdetail == null ? (
    <div className='content'>
      <div className='personal-task'>
        <h1>List of Tasks</h1>
        <div className='content-header'>
          <span
            id='buttonOpenModal'
            onClick={() => {
              setOpenModal(!openModal);
            }}
          >
            Create new Task
          </span>
          <ModalCreateTask
            openModal={openModal}
            setOpenModal={setOpenModal}
            check={check}
            setCheck={setCheck}
          />
        </div>
        <div className='listTaskall'>
          {listTask != null &&
            listTask.map((element) => {
              return (
                <div
                  className='taskDetail'
                  key={element.id}
                  style={{
                    border:
                      "1px solid " + getcolor(element.TaskTo, element.status),
                  }}
                  onClick={() => {
                    handleOnTaskDetails(element);
                  }}
                >
                  <input
                    type='checkbox'
                    defaultChecked={element.status}
                    // onChange={() => handleOnChange(element.id)}
                    readOnly
                  />
                  <h4
                    style={{
                      color: getcolor(element.TaskTo, element.status),
                    }}
                  >
                    {element.title}
                  </h4>
                  <p>Time Limited: {element.taskTo}</p>
                  <p
                    style={{
                      color: getcolor(element.taskTo, element.status),
                    }}
                  >
                    {getcolor(element.taskTo, element.status) === "red"
                      ? "Overdue"
                      : getcolor(element.taskTo, element.status) === "green"
                      ? "Finish"
                      : "To be doing"}
                  </p>
                  {/* <p>Status:{element.status ? "blue" : {element.TaskTo}}</p> */}
                </div>
              );
            })}
        </div>
      </div>
      <div className='listTaskProject'></div>
    </div>
  ) : (
    <TaskDetails
      taskdetail={taskdetail}
      setTaskdetail={setTaskdetail}
      getColor={getcolor}
      check={check}
      setCheck={setCheck}
    />
  );
}

export default MyTasks;
