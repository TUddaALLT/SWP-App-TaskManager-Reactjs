import React, { useEffect, useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { BiCheckboxChecked } from "react-icons/bi";
import { AiOutlineComment } from "react-icons/ai";
import authAxios from "../services/AxiosInstance";

const DisplayPinTask = () => {
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

  return (
    <>
      {listTask != null &&
        listTask.map((element) => {
          return (
            element.pinTask && (
              <div key={element.id} className="tasksPin" onClick={() => {}}>
                <h2 className="tasktitle">{element.title}</h2>
                <p className="taskdescription">{element.description}</p>
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
              </div>
            )
          );
        })}
    </>
  );
};
export default DisplayPinTask;
