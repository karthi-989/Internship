import React, { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import "./card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
// import { Dialog } from "primereact/dialog";
import { Dialog } from "primereact/dialog";

function View() {
  const [data, setData] = useState([]);
  const [editShow, setEditShow] = useState(false);
  const [on, seton] = useState([]);
  console.log(on);
  const Navigate = useNavigate();
  const [edit, setEdit] = useState({
    Name: "",
    Decription: "",
    Food_type: "",
    Recipe_Created: "",
    Image: "",
  });
  useEffect(() => {
    if (on.length > 0) {
      console.log("***************");
      axios
        .get(`http://127.0.0.1:8000/food/data/${on}/`)
        .then((res) => {
          console.log(res.data.length,"leeeeeeeeeeee");
          console.log(res.data);
          if(res.data.length == 0){
            console.log("yessssssssss");
            alert("No recipes found");
          }
          setData(res.data);
        })
        .catch((err) => console.log(err));
    } else {
      getData();
    }
  }, [on]);
  useEffect(() => {
    getData();
  }, []);

  function getData() {
    axios
      .get("http://127.0.0.1:8000/food/view1/")
      .then((res) => setData(res.data));
  }
  function Delete(id) {
    axios
      .delete(`http://127.0.0.1:8000/food/view/${id}/`)
      .then((res) => {
        console.log(res.data);
        getData();
      })
      .catch((error) => console.log(error));
  }
  function Patch(id) {
    setEditShow(false);
    console.log(id);

    axios
      .put(`http://127.0.0.1:8000/food/patch/${id}/`, edit)
      .then((res) => {
        console.log(res.data);
        alert("Recipe_Upadted")
        getData();
      })
      .catch((error) => console.log(error));
  }
  function gettingData(id) {
    console.log(id);
    // setShow(true);
    axios
      .get(`http://127.0.0.1:8000/food/view1/${id}/`)
      .then((res) => {
        console.log(res.data);
        setEdit(res.data);
        setEditShow(true);
      })
      .catch((error) => console.log(error));
  }

  // const showDialogBox = () => {
  //   console.log("hello");
  //   setEditShow(true)
  // };

  function goBack() {
    Navigate("/");
  }
  return (
    <>
      <>
        <div className="text-center">
          <h1 class="title">View Recipes</h1>
        </div>
        <div
          className="form-group "
          style={{ display: "flex", justifyContent: "space-around" }}
        >
          <select
            className="form-select "
            onChange={(e) => seton(e.target.value)}
            style={{ alignItems: "center",width:"348px"}}
          >
            <option value="select-week">select-week</option>
            <option value="this-week">this-week</option>
            <option value="last-week">last-week</option>
          </select>
          <button
            className="btn btn-primary "
            onClick={goBack}
            style={{ width: "150px" }}
          >
            Add
          </button>
        </div>

        <div>
          <div className="container" id="cont">
            {data.map((items) => (
              <div className="card" key={items.id}>
                <img
                  src={items.Image}
                  className="card-img-top"
                  id="image"
                  alt="..."
                />
                <div className="card-body" id="body">
                  <div className="dropdown">
                    <button className="dropdown-btn" style={{ color: "white" }}>
                      &#8942;
                    </button>
                    <div className="dropdown-content">
                      <div>
                        <FontAwesomeIcon
                          icon={faTrash} 
                          onClick={() => Delete(items.id)}
                          style={{ color: "black" }}
                        />&nbsp;<p style={{color:"black",display:"inline"}}><b>Delete</b></p>
                      </div>
                      <div>
                        <FontAwesomeIcon
                          icon={faPenToSquare}
                          style={{ color: "black" }}
                          onClick={() => gettingData(items.id)}
                        />&nbsp;<p style={{color:"black",display:"inline"}}><b>Edit</b></p>
                        <div>
                          <Dialog
                            header="Edit Recipe"
                            visible={editShow}
                            style={{ width: "50vw" }}
                            onHide={() => setEditShow(false)}
                          >
                            <div className="container" id="form">
                              <h1 class="title">edit recipe </h1>
                              <form>
                                <div className="row">
                                  <div className="form-group col-md-6">
                                    <label htmlFor="inputname" id="lab">
                                      <b>Name*</b>
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="inputname"
                                      placeholder="Name"
                                      value={edit.Name}
                                      onChange={(e) =>
                                        setEdit({
                                          ...edit,
                                          Name: e.target.value,
                                        })
                                      }
                                    />
                                  </div>
                                  <div className="form-group col-md-6">
                                    <label htmlFor="" id="lab">
                                      <b>Image</b>
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="inputPassword4"
                                      placeholder="Image"
                                      value={edit.Image}
                                      onChange={(e) =>
                                        setEdit({
                                          ...edit,
                                          Image: e.target.value,
                                        })
                                      }
                                    />
                                  </div><br></br>

                                 
                                  <label id="lab">
                                    <b>Recipe_Created </b>
                                  </label>
                                  <div className="form-group ">
                                    <input
                                      className="form-control"
                                      type="text"
                                      disabled
                                      placeholder="Recipe_date"
                                      value={edit.Recipe_Created}
                                      onChange={(e) =>
                                        setEdit({
                                          ...edit,
                                          Recipe_Created: e.target.value,
                                        })
                                      }
                                    />
                                  </div>
                                </div>
                                <br></br>

                                <div
                                  className="form-group col-md-6"
                                  style={{ display: "inline" }}
                                >
                                  <label id="lab">
                                    <b>Recipe_type</b>
                                  </label>
                                  <select
                                    value={edit.Food_type}
                                    className="form-select"
                                    onChange={(e) =>
                                      setEdit({
                                        ...edit,
                                        Food_type: e.target.value,
                                      })
                                    }
                                  >
                                    <option value="veg">veg</option>
                                    <option value="nonveg">nonveg</option>
                                  </select>
                                </div><br></br>
                                <div className="form-group">
                                    <label htmlFor="inputname" id="lab">
                                      <b>Description*</b>
                                    </label>
                                    <textarea
                                      rows="5"
                                      cols="10"
                                      className="form-control"
                                      id="inputname"
                                      value={edit.Decription}
                                      placeholder="Description"
                                      onChange={(e) =>
                                        setEdit({
                                          ...edit,
                                          Decription: e.target.value,
                                        })
                                      }
                                    />
                                  </div>
                                <br></br>
                                
                                <center>
                                  <button
                                    id="lab"
                                    type="submit"
                                    className="btn btn-primary"
                                    onClick={(e) => {
                                      e.preventDefault();
                                      Patch(edit.id);
                                    }}
                                  >
                                    Submit
                                  </button>
                                </center>
                              </form>
                            </div>
                          </Dialog>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h5 className="card-title">
                    <b>{items.Name}</b>
                  </h5>
                  <p className="card-text">
                    <b>Description: </b> {items.Decription}
                  </p>
                  <p>
                    {" "}
                    <b>{items.Food_type}</b>
                  </p>
                  <p>
                    {" "}
                    <b>{items.Recipe_Created}</b>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    </>
  );
}
export default View;
