import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { BiCheckboxChecked } from "react-icons/bi";
import { AiOutlineComment } from "react-icons/ai";

const DisplayPinTask = (props) => {
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
          <div key={element.id} className="tasksPin" onClick={() => {}}>
            <h2 className="tasktitle">
              {element.title}
              <span style={{ color: "#B6B6B6", float: "right" }}>
                <BsThreeDots
                  onClick={() => {
                    handleOnClick(element.id + "pin");
                  }}
                />
                <div className="menu_task" id={element.id + "pin"}>
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
            <div id="footer">
              <div id="icons">
                <BiCheckboxChecked className="iconTask" title="Attachment" />1
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
          </div>
        );
      })}
    </>
  );
};
export default DisplayPinTask;
