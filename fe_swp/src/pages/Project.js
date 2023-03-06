import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { BsFillPencilFill } from "react-icons/bs";
import "../styles/Project.css";

function Project() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className='project_component'>
      <div style={{}}>
        <h1 style={{ marginBottom: "3vh" }}>Your Project</h1>
        <p>Create new project </p>
      </div>
      <div className='big_btns'>
        <div class='big_btn'>
          <div>
            <AiOutlinePlus size='30px'></AiOutlinePlus>
          </div>
          <div> Create empty project</div>
        </div>
        <div class='big_btn'>
          <div>
            <BsFillPencilFill size='25px'></BsFillPencilFill>
          </div>
          <div>Use Template</div>
        </div>
      </div>
      <div style={{ marginTop: "5vh" }}>
        <p>Your Project</p>
        <div className='your_pr'>
          <div class='project'>
            <div>
              <AiOutlinePlus size='30px'></AiOutlinePlus>
            </div>
            <div> Create empty project</div>
          </div>
          <div class='project'>
            <div>
              <AiOutlinePlus size='30px'></AiOutlinePlus>
            </div>
            <div> Create empty project</div>
          </div>
          <div class='project'>
            <div>
              <AiOutlinePlus size='30px'></AiOutlinePlus>
            </div>
            <div> Create empty project</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
