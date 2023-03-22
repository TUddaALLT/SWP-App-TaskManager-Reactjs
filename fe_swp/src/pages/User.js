import { Button, Input, TextField } from "@mui/material";
import { border } from "@mui/system";
import { useEffect, useState } from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import authAxios from "../services/AxiosInstance";
import swal from "sweetalert";
function User() {
  const [edit, setEdit] = useState(false);
  const [user, setUser] = useState();

  async function handleUpdateUser(e) {
    e.preventDefault();
    let dob = document.getElementsByName("dob")[0].value;
    let email = document.getElementsByName("email")[0].value;
    let phone = document.getElementsByName("phone")[0].value;
    let work = document.getElementsByName("work")[0].value;
    let name = document.getElementsByName("name")[0].value;

    if (name == "")
      swal({
        title: "Error",
        text: "Name is not empty !!",
        icon: "warning",
      });
    else if (phone.size != 10 && phone != "")
      swal({
        title: "Error",
        text: "Phone is 10 number !!",
        icon: "warning",
      });
    else {
      if (window.confirm("Save now ?")) {
        swal({
          title: "Edit success",
          text: "",
          icon: "success",
        });
        await authAxios
          .put(`/User/${localStorage.getItem("id")}`, {
            id: user.id,
            userName: user.userName,
            name: name,
            dateOfBirth: dob,
            phone: phone,
            email: email,
            work: work,
            image: user.image,
          })
          .then(function (response) {
            console.log(response.data.data);
          })
          .catch(function (error) {});

        setEdit(false);
      }
    }
  }
  useEffect(() => {
    authAxios
      .get("/User")
      .then(function (response) {
        console.log(response.data.data);
        response.data.data.find(
          (user) => user.id == localStorage.getItem("id"),
        ) != undefined &&
          setUser(
            response.data.data.find(
              (user) => user.id == localStorage.getItem("id"),
            ),
          );
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [user != null, edit]);
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    console.log(formData);
    await authAxios
      .put(`/User/Image/${localStorage.getItem("id")}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(function (response) {
        swal({
          text: "Update Avatar Successfull!!!",
          icon: "success",
        });
        console.log(response.data.data);
      })
      .catch(function (error) {});
    setEdit(!edit);
  }

  return (
    user != null && (
      <>
        <div
          style={{
            display: "flex",
            margin: "5vh 10vw",
            backgroundColor: "rgb(202 233 186)",
            height: "80vh",
            borderRadius: "1vw",
          }}
        >
          <div
            style={{
              height: "100vh",
              width: "20vw",
              paddingTop: "10vh",
              paddingLeft: "10vw",
            }}
          >
            <div
              style={{
                marginBottom: "5vh",
                display: "flex",
                justifyContent: "center",
                width: "30vh",
                height: "30vh",
                borderRadius: "50%",
                border: "1px solid red",
              }}
            >
              {" "}
              {user.image != null ? (
                <img
                  src={user.image}
                  style={{
                    width: "30vh",
                    height: "30vh",
                    borderRadius: "50%",
                    objectFit: "cover",
                    marginBottom: "5px",
                  }}
                  alt=''
                ></img>
              ) : (
                <p style={{ margin: "auto" }}>Đây là Image</p>
              )}
            </div>

            <div
              style={{
                marginTop: "3vh",
                marginBottom: "5vh",
              }}
            >
              <form onSubmit={handleSubmit} encType='multipart/form-data'>
                <TextField
                  style={{ width: "190px", marginRight: "60px" }}
                  type='file'
                  onChange={handleFileChange}
                />
                <Button
                  type='button'
                  style={{
                    backgroundColor: "#ffacac",
                    marginTop: "30px",
                    marginRight: "60px",
                  }}
                  onClick={() => {
                    setEdit(true);
                  }}
                  type='submit'
                >
                  Update Avatar
                </Button>
              </form>
            </div>
          </div>
          <div style={{ height: "100vh", width: "80vw", paddingTop: "5vh" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                marginRight: "2vw",
              }}
            >
              <AiFillCheckCircle
                size='30px'
                style={{ color: "black", marginRight: "5px" }}
              ></AiFillCheckCircle>
              <a href='home' style={{ color: "black" }}>
                Back to Stock Task
              </a>
            </div>
            <div style={{ textAlign: "left" }}>
              {edit == false ? (
                <>
                  <div
                    className='infor'
                    style={{
                      marginLeft: "10vw",
                      marginRight: "10vw",
                      marginTop: "3vh",
                    }}
                  >
                    <h2>{user.name}</h2>

                    <h2>
                      Date Of Birth:
                      <span
                        style={{ fontWeight: "normal", marginLeft: "10px" }}
                      >
                        {user.dateOfBirth != null &&
                          user.dateOfBirth.substring(0, 10)}
                      </span>
                    </h2>
                    <h2>
                      Email:{" "}
                      <span
                        style={{ fontWeight: "normal", marginLeft: "10px" }}
                      >
                        {user.email}
                      </span>
                    </h2>
                    <h2>
                      Phone:{" "}
                      <span
                        style={{ fontWeight: "normal", marginLeft: "10px" }}
                      >
                        {user.phone}
                      </span>
                    </h2>
                    <h2>
                      Work:{" "}
                      <span
                        style={{ fontWeight: "normal", marginLeft: "10px" }}
                      >
                        {user.work}
                      </span>
                    </h2>
                  </div>
                  <div className='custom'>
                    <Button
                      className='btn-login'
                      type='button'
                      style={{ marginLeft: "10vw", color: "white" }}
                      onClick={() => {
                        setEdit(true);
                      }}
                    >
                      Edit
                    </Button>
                  </div>
                </>
              ) : (
                <form
                  onSubmit={(e) => handleUpdateUser(e)}
                  style={{
                    marginLeft: "10vw",
                    marginRight: "10vw",
                    marginTop: "3vh",
                  }}
                >
                  <div className='login_input'>
                    <TextField
                      fullWidth
                      type='text'
                      label='Name'
                      variant='outlined'
                      name='name'
                      defaultValue={user.name}
                    />
                  </div>
                  <br></br>
                  <div className='login_input'>
                    <TextField
                      fullWidth
                      type='date'
                      name='dob'
                      defaultValue={
                        user.dateOfBirth != null &&
                        user.dateOfBirth.substring(0, 10)
                      }
                    />
                  </div>
                  <br></br>
                  <div className='login_input'>
                    <TextField
                      fullWidth
                      type='email'
                      label='Email'
                      variant='outlined'
                      name='email'
                      defaultValue={user.email}
                    />
                  </div>
                  <br></br>
                  <div className='login_input'>
                    <TextField
                      fullWidth
                      type='number'
                      label='Phone'
                      variant='outlined'
                      name='phone'
                      defaultValue={user.phone}
                    />
                  </div>
                  <br></br>
                  <div className='login_input'>
                    <TextField
                      fullWidth
                      type='text'
                      label='Work'
                      variant='outlined'
                      name='work'
                      defaultValue={user.work}
                    />
                  </div>
                  <br></br>

                  <Button
                    className='btn-login'
                    type='submit'
                    fullWidth
                    style={{ marginBottom: "20px", color: "white" }}
                  >
                    Save changes
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </>
    )
  );
}

export default User;
