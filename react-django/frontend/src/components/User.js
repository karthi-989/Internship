import { useEffect, useState } from "react";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import Dropdown from 'react-bootstrap/Dropdown';
import "./user.css";
function User() {
  const [user, setUser] = useState([]);
  const [search,setSearch]=useState([])

  console.log(search)
  useEffect(() => {
    if(search!==""){
      axios.get(`http://127.0.0.1:8000/user/search/?name=${search}`)
      .then((res)=>{
        setUser(res.data);
      })
    }else {
    getData();
    }
  }, [search]);
  const [visible, setVisible] = useState(false);
  const [show, setShow] = useState(false);
  const [value, setvalue] = useState({
    serial_no: "",
    FirstName: "",
    LastName: "",
    Email: "",
    Course: "",
  });
  const [edit, setEdit] = useState({
    id: "",
    serial_no: "",
    FirstName: "",
    LastName: "",
    Email: "",
    Course: "",
  });
  function getData() {
    axios
      .get("http://127.0.0.1:8000/user/view/")
      .then((res) => setUser(res.data));
  }
  const submitData = (event) => {
    event.preventDefault();
    axios
      .post("http://127.0.0.1:8000/user/create/", value)
      .then((res) => {
        console.log(res.data);
        setVisible(false);
        getData();
      })
        .catch((error) => {
          console.error("Error submitting data:", error);
        });
  };
  function Delete(id) {
    axios
      .delete(`http://127.0.0.1:8000/user/view/${id}/`)
      .then((res) => {
        console.log(res.data);
        getData();
      })
      .catch((error) => console.log(error));
  }
  function Patch(id) {
    console.log(id);

    axios
      .put(`http://127.0.0.1:8000/user/patch/${id}/`, edit)
      .then((res) => {
        console.log(res.data);
        setShow(false);
        getData();
      })
      .catch((error) => console.log(error));
  }
  function gettingData(id) {
    console.log(id);
    setShow(true);
    axios
      .get(`http://127.0.0.1:8000/user/view1/${id}/`)
      .then((res) => {
        console.log(res.data);
        setEdit(res.data);
        getData();
      })
      .catch((error) => console.log(error));
  
  }

   
  
 

  return (
    
    <div className="container-md" id="cont">
    
      
        <div class="input-group">
          <input
            type="search"
            class="form-control rounded"
            placeholder="Search"
            onChange={e=> {setSearch(e.target.value)}}
           />
        </div>
      

      <Dialog
        header="Add details"
        visible={visible}
        style={{ width: "50vw" }}
        onHide={() => setVisible(false)}
      >
        <form onSubmit={submitData}>
          <div className="row">
            <div className="form-group">
              <label htmlFor="inputAddress">
                <b>SerialNo*</b>
              </label>
              <input
                type="text"
                className="form-control"
                id="inputAddress"
                placeholder="SerialNo"
                onChange={(e) =>
                  setvalue({ ...value, serial_no: e.target.value })
                }
              />
            </div>

            <div className="form-group col-md-6">
              <label htmlFor="inputEmail4">
                <b>FirstName*</b>
              </label>
              <input
                type="text"
                className="form-control"
                id="inputEmail4"
                placeholder="Firstname"
                onChange={(e) =>
                  setvalue({ ...value, FirstName: e.target.value })
                }
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="inputPassword4">
                <b>LastName*</b>
              </label>
              <input
                type="text"
                className="form-control"
                id="inputPassword4"
                placeholder="Lastname"
                onChange={(e) =>
                  setvalue({ ...value, LastName: e.target.value })
                }
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="inputEmail4">
                <b>Email*</b>
              </label>
              <input
                type="email"
                className="form-control"
                id="inputEmail4"
                placeholder="Email"
                onChange={(e) => setvalue({ ...value, Email: e.target.value })}
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="inputPassword4">
                <b>Course*</b>
              </label>
              <input
                type="text"
                className="form-control"
                id="inputPassword4"
                placeholder="Course"
                onChange={(e) => setvalue({ ...value, Course: e.target.value })}
              />
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </Dialog>

      <table className="table table-striped ">
        <thead className="table-dark">
          <tr>
            <th scope="col">Serial NO</th>
          +  <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Course</th>
            <th scope="col">Remove</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>
          {user.map((item) => (
            <tr key={item.id}>
              <td>
                <b>{item.serial_no}</b>
              </td>
              <td>
                <b>{item.FirstName}</b>
              </td>
              <td>
                <b>{item.LastName}</b>
              </td>
              <td>
                <b>{item.Email}</b>
              </td>
              <td>{item.Course}</td>
              <td>
                <FontAwesomeIcon
                  icon={faTrashCan}
                  onClick={() => Delete(item.id)}
                />
              </td>
              <td>
                <div>
                  <FontAwesomeIcon
                    icon={faPenToSquare}
                    onClick={() => gettingData(item.id)}
                  />

                  <Dialog
                    header="Edit Data"
                    visible={show}
                    style={{ width: "50vw" }}
                    onHide={() => setShow(false)}
                  >
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        Patch(edit.id);
                      }}
                    >
                      <div className="row">
                        <div className="form-group">
                          <label htmlFor="inputAddress">
                            <b>SerialNo*</b>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="inputAddress"
                            placeholder="SerialNo"
                            value={edit.serial_no}
                            onChange={(e) =>
                              setEdit({ ...edit, serial_no: e.target.value })
                            }
                          />
                        </div>

                        <div className="form-group col-md-6">
                          <label htmlFor="inputEmail4">
                            <b>FirstName*</b>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="inputEmail4"
                            placeholder="Firstname"
                            value={edit.FirstName}
                            onChange={(e) =>
                              setEdit({ ...edit, FirstName: e.target.value })
                            }
                          />
                        </div>
                        <div className="form-group col-md-6">
                          <label htmlFor="inputPassword4">
                            <b>LastName*</b>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="inputPassword4"
                            placeholder="Lastname"
                            value={edit.LastName}
                            onChange={(e) =>
                              setEdit({ ...edit, LastName: e.target.value })
                            }
                          />
                        </div>
                        <div className="form-group col-md-6">
                          <label htmlFor="inputEmail4">
                            <b>Email*</b>
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            id="inputEmail4"
                            placeholder="Email"
                            value={edit.Email}
                            onChange={(e) =>
                              setEdit({ ...edit, Email: e.target.value })
                            }
                          />
                        </div>
                        <div className="form-group col-md-6">
                          <label htmlFor="inputPassword4">
                            <b>Course*</b>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="inputPassword4"
                            placeholder="Course"
                            value={edit.Course}
                            onChange={(e) =>
                              setEdit({ ...edit, Course: e.target.value })
                            }
                          />
                        </div>
                      </div>
                      <button type="submit" className="btn btn-primary">
                        Submit
                      </button>
                    </form>
                  </Dialog>
                </div>
              </td>
            </tr>
          ))}
    
        </tbody>

      </table>
      <div className="text-end">
        <Button
          label="ADD"
          icon="pi pi-external-link"
          onClick={() => setVisible(true)}
        />
      </div>
    </div>
  );
}
export default User;
