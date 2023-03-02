import React from "react";
import { BsThreeDots } from "react-icons/bs";

const DisplayTaskToday = (props) => {
  const listTask = props.listTask;
  return (
    <>
      {listTask.map((element) => {
        return (
          <div key={element.id} className="tasks">
            <h2 className="tasktitle">
              {element.name}
              <span style={{ color: "#B6B6B6", float: "right" }}>
                <BsThreeDots />
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
