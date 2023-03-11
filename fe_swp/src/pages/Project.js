import React, { useState, useEffect } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { BsFillPencilFill } from "react-icons/bs";
import ModalCreateProject from "../components/ModalCreateProject";
import "../styles/Project.css";
import authAxios from "../services/AxiosInstance";
function Project() {
  const [openModal, setOpenModal] = useState(false);
  const [projects, setProjects] = useState();
  useEffect(() => {
    authAxios
      .get(`/WorkSpace/user/${localStorage.getItem("id")}`)
      .then(function (response) {
        console.log(response.data.data);
        const data = response.data.data.sort((a, b) => b.id - a.id);
        setProjects(data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [openModal]);

  return (
    <div className="project_component">
      <div style={{}}>
        <h1 style={{ marginBottom: "3vh" }}>Your Project</h1>
        <p>Create new project </p>
      </div>
      <div className="big_btns">
        <div
          className="big_btn"
          onClick={() => {
            setOpenModal(!openModal);
          }}
        >
          <div>
            <AiOutlinePlus size="30px"></AiOutlinePlus>
          </div>
          <div> Create empty project</div>
        </div>
        <ModalCreateProject
          openModal={openModal}
          setOpenModal={setOpenModal}
        ></ModalCreateProject>
        <div className="big_btn">
          <div>
            <BsFillPencilFill size="25px"></BsFillPencilFill>
          </div>
          <div>Use Template</div>
        </div>
      </div>
      <div style={{ marginTop: "5vh" }}>
        <p>Your Project</p>
        {/* map */}
        <div className="your_pr">
          {projects != null &&
            projects.map((project) => (
              <div className="project" key={project.id}>
                <div className="project_img"></div>
                <div className="project_title"> {project.name}</div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Project;
