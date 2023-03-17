import React, { useEffect, useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { BiCheckboxChecked } from "react-icons/bi";
import { AiOutlineComment } from "react-icons/ai";
import authAxios from "../services/AxiosInstance";

const DisplayPinTask = (props) => {
  const [listTask, setListTask] = useState();
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
  }, []);
  const setContent = props.setContent;
  const setTaskdetail = props.setTaskdetail;
  const handleActive = props.handleActive;
  const getcolor = (dateTo, status) => {
    const currentDate = new Date();
    const date1 = new Date(dateTo);
    if (status) return "green";
    else {
      if (date1.getTime() >= currentDate.getTime()) return "orange";
      else if (date1.getTime() < currentDate.getTime()) return "red";
    }
  };
  return (
    <>
      {listTask != null &&
        listTask.map((element) => {
          return (
            element.pinTask && (
              <div
                key={element.id}
                className="tasksPin"
                style={{
                  border:
                    "2px solid " + getcolor(element.taskTo, element.status),
                }}
                onClick={() => {
                  setTaskdetail(element);
                  setContent(2);
                  handleActive(2, "link", "listitems");
                }}
              >
                <h2 className="tasktitle">{element.title}</h2>
                <h5 style={{ paddingLeft: "10px", marginBottom: "5px" }}>
                  Status:{" "}
                  <span
                    style={{
                      color: getcolor(element.taskTo, element.status),
                      marginLeft: "5px",
                    }}
                  >
                    {getcolor(element.taskTo, element.status) === "red"
                      ? "Overdue"
                      : getcolor(element.taskTo, element.status) === "green"
                      ? "Finish"
                      : "To be doing"}
                  </span>
                </h5>

                {element.info != null && (
                  <div id="footer">
                    <div id="icons">
                      <BiCheckboxChecked
                        className="iconTask"
                        title="Attachment"
                      />
                      1
                      <AiOutlineComment className="iconTask" title="Comment" />2
                    </div>

                    <div id="userJoin">
                      <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            )
          );
        })}
    </>
  );
};
export default DisplayPinTask;
