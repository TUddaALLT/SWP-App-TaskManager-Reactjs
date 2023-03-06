import { Button, Checkbox, Modal, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import "../styles/Modal.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "40%",
  height: "80%",
  bgcolor: "white",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const ModalCreateTask = (props) => {
  const openModal = props.openModal;
  const setOpenModal = props.setOpenModal;
  const [name, setName] = useState("");
  const [addTag, setAddTag] = useState(false);
  const [addAttach, setAttach] = useState(false);
  const [description, setDescription] = useState("");
  const [checkList, setCheckList] = useState([]);

  const handleCloseModal = () => {
    setOpenModal(false);
    setName("");
    setDescription("");
    setAddTag(false);
    setCheckList([]);
    setAttach(false);
  };
  const handleCheckList = (e) => {
    setCheckList([...checkList, e]);
  };
  const handleSubmitModal = () => {
    //listProject.push({ id: 5, name: name });
    // call api
    console.log({ name: name, description: description });
    setName("");
    setDescription("");
  };

  const handleOnChangeName = (event) => {
    setName(event.target.value);
  };
  const handleOnChangeDes = (event) => {
    setDescription(event.target.value);
  };
  return (
    <>
      <Modal open={openModal} onClose={handleCloseModal}>
        <Box sx={{ ...style, borderRadius: 3, overflow: "auto" }}>
          <h2 id="modal-header">New Task</h2>
          <div id="modal-content">
            <div className="name">
              <TextField
                fullwidth
                sx={{ width: "50%" }}
                type="text"
                label="Title Task"
                variant="outlined"
                onChange={(event) => handleOnChangeName(event)}
              />
            </div>
            <div id="other-information">
              <div id="tag">
                {addTag ? (
                  <TextField
                    sx={{ width: "30%", fontSize: "16px", marginLeft: "20px" }}
                    id="standard-basic"
                    label="Tag"
                    variant="standard"
                  />
                ) : (
                  <div
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      setAddTag(true);
                    }}
                    className="textadd"
                  >
                    + Add Tag
                  </div>
                )}
              </div>
              <div id="checklist">
                {checkList.length === 0 ? (
                  ""
                ) : (
                  <>
                    <span style={{ color: "red" }}>Check List</span> <br />
                  </>
                )}
                {checkList.map((element) => {
                  return (
                    <>
                      <input type="checkbox" className="checkList" />
                      <TextField
                        sx={{
                          width: "30%",
                          fontSize: "16px",
                          marginLeft: "20px",
                        }}
                        label={element}
                        variant="standard"
                      />
                      <br />
                    </>
                  );
                })}
                <div
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    handleCheckList("");
                  }}
                  className="textadd"
                >
                  + Add Check List Item
                </div>
              </div>
              <div id="attachment">
                {addAttach ? (
                  <TextField
                    fullwidth
                    sx={{ width: "100%" }}
                    type="text"
                    label="Attachment"
                    variant="outlined"
                    onChange={(event) => handleOnChangeDes(event)}
                  />
                ) : (
                  <div
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      setAttach(true);
                    }}
                    className="textadd"
                  >
                    + Add Attachment
                  </div>
                )}
              </div>
            </div>
            <div className="description">
              <TextField
                fullwidth
                sx={{ width: "100%" }}
                type="text"
                label="Description"
                variant="outlined"
                multiline
                maxRows={3}
                rows={3}
                onChange={(event) => handleOnChangeDes(event)}
              />
            </div>
          </div>
          <div id="modal-footer">
            <Button
              variant="outlined"
              color="error"
              onClick={handleCloseModal}
              sx={{ margin: "0 20px" }}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              disabled={name === "" ? true : false}
              onClick={() => {
                handleSubmitModal();
                handleCloseModal();
              }}
            >
              Create
            </Button>
          </div>
        </Box>
      </Modal>
    </>
  );
};
export default ModalCreateTask;
