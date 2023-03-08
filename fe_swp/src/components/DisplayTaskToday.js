import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";

const DisplayTaskToday = (props) => {
  const listTask = props.listTask;

  const handleOnClick = (id) => {
    let a = document.getElementById(id);

    if (a.style.display === "block") {
      a.style.display = "none";
      // document
      //   .getElementsByClassName("content")[0]
      //   .removeEventListener("click");
    } else {
      a.style.display = "block";

      // document
      //   .getElementsByClassName("content")[0]
      //   .addEventListener("click", () => handleOnClick(id));
    }
  };

  return (
    <>
      {listTask.map((element) => {
        return (
          <div
            key={element.id}
            className="tasks"
            onClick={() => {
              console.log(element.id);
            }}
          >
            <h2 className="tasktitle">
              {element.title}
              <span style={{ color: "#B6B6B6", float: "right" }}>
                <BsThreeDots
                  onClick={() => {
                    handleOnClick(element.id.concat("today"));
                  }}
                />

                <div className="menu_task" id={element.id.concat("today")}>
                  <ul>
                    <li onClick={() => {}}>
                      {element.PinTask ? "Pin" : "Unpin"}
                    </li>
                    <li style={{ color: "red" }} onClick={() => {}}>
                      Delete
                    </li>
                  </ul>
                </div>
              </span>
            </h2>
            <p className="taskdescription">{element.description}</p>
          </div>
        );
      })}
    </>
  );
};
export default DisplayTaskToday;
