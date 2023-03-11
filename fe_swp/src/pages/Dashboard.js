import React, { useEffect, useState } from "react";
import "../styles/Dashboard.css";
import DisplayTaskToday from "../components/DisplayTaskToday";
import DisplayPinTask from "../components/DisplayPinTask";
import ModalCreateTask from "../components/ModalCreateTask";
import authAxios from "../services/AxiosInstance";
const getDate = () => {
  const Month = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUNE",
    "JULY",
    "AUG",
    "SEPT",
    "OCT",
    "NOV",
    "DEC",
  ];
  const date = new Date();
  return { day: date.getDate(), month: Month[date.getMonth()] };
};
const Dashboard = (props) => {
  const date = getDate();
  // const listTask = [
  //   {
  //     id: "1",
  //     sectionID: "",
  //     title: "Task 1",
  //     description:
  //       "Task này sắp đến hạn rồi bé ơi Task này sắp đến hạn rồi bé ơi đúng nhận sai cãi",
  //     image: "",
  //     status: "",
  //     createTime: "",
  //     TaskTo: "",
  //     TaskFrom: "",
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
  //     status: "",
  //     createTime: "",
  //     TaskTo: "",
  //     TaskFrom: "",
  //     PinTask: false,
  //     TagID: "",
  //     Attachment: "",
  //   },
  // ];
  const [openModal, setOpenModal] = useState();
  const [listTask, setListTask] = useState();
  useEffect(() => {
    authAxios
      .get(`/Task/AssignedTasks/${localStorage.getItem("id")}`)
      .then(function (response) {
        console.log(response.data.data);

        const currentDate = new Date().toLocaleDateString();

        // const dateString = "2023-03-10T13:35:20.487";
        // const date = new Date(dateString);
        // const formattedDate = date.toLocaleDateString();
        // console.log(formattedDate); // "3/10/2023" (based on the user's locale)
        console.log(
          response.data.data.filter((item) => {
            const to = new Date(item.taskTo).toLocaleDateString();
            const from = new Date(item.taskTo).toLocaleDateString();
            console.log(currentDate > from);
            console.log(currentDate < from);

            return currentDate == from;
          }),
        );
        setListTask(
          response.data.data.filter((item) => {
            const to = new Date(item.taskTo).toLocaleDateString();
            const from = new Date(item.taskFrom).toLocaleDateString();
            console.log(currentDate > from);
            console.log(currentDate < from);
            return currentDate >= from && currentDate <= to;
          }),
        );
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [openModal]);
  console.log(listTask);
  return (
    <div className='content'>
      <div className='content-header'>
        <span
          id='buttonOpenModal'
          onClick={() => {
            setOpenModal(true);
          }}
        >
          Create Task
        </span>
        <ModalCreateTask openModal={openModal} setOpenModal={setOpenModal} />
      </div>
      <div className='dashboard-content'>
        <div className='element'>
          <div className='today'>
            <h2>Today</h2>
            <div className='date-box'>
              <h1 className='month'>{date.month}</h1>
              <p className='day'>{date.day}</p>
            </div>
          </div>
        </div>
        <div className='element'>
          <div className='task-today'>
            <h2>Your Task Today</h2>
            <DisplayTaskToday listTask={listTask} />
          </div>
        </div>
        <div className='element'>
          <div className='pin-task'>
            <h2>Pin Task</h2>
            <DisplayPinTask />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
