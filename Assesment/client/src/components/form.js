import React, { useState } from "react";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Link } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import "./form.css";

function Form() {
  const [value, setvalue] = useState({
    Name: "",
    Decription: "",
    Food_type: "",
    Recipe_Created: "",
    Image: "",
  });

  const submitData = () => {
    axios.post("http://127.0.0.1:8000/food/view/", value).then((res) => {
      console.log(res.data);
      alert("recipe created")
    });
  };

  return (
    <>
      <div id="div">
        <div className="container" id="for">
          <h1 id="title">create recipe </h1>
          <form onSubmit={submitData}>
            <div className="row">
              <div className="form-group col-md-6">
                <label htmlFor="inputname" className="lab">
                  <b>Name*</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputname"
                  placeholder="Name"
                  onChange={(e) => setvalue({ ...value, Name: e.target.value })}
                />
              </div>

              <div className="form-group col-md-6">
                <label htmlFor="" className="lab"> <b>Recipe_Created*</b> </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  className="form-control"
                  onChange={(e) =>
                    setvalue({ ...value, Recipe_Created: e.target.value })
                  }
                />
              </div>  <br></br>
              <div className="form-group ">
                <label htmlFor="" className="lab">
                  <b>Image*</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputPassword4"
                  placeholder="Image"
                  onChange={(e) =>
                    setvalue({ ...value, Image: e.target.value })
                  }
                />
              </div>
            </div><br></br>
            <div className="form-group ">
              <label htmlFor="" className="lab">
                <b>Food_type*</b>
              </label>
              <select
                className="form-select"
                onChange={(e) =>
                  setvalue({ ...value, Food_type: e.target.value })
                }
              >
                <option value="select" selected>select type</option>
                <option value="veg">veg</option>
                <option value="nonveg">nonveg</option>
              </select>
            </div><br></br>
            <div className="form-group">
                <label htmlFor="inputname" className="lab">
                  <b>Description*</b>
                </label>
                <textarea
                  rows="5" cols="10"
                  className="form-control"
                  id="inputname"
                  placeholder="Description"
                  onChange={(e) =>
                    setvalue({ ...value, Decription: e.target.value })
                  }
                />
              </div>
            <br></br><br></br>
            

            <button
              type="submit"
              class="btn btn-primary"
              style={{ float: "right" }}
            >
              Submit
            </button>
            <Link to="/view/" className="btn btn-primary">
              {" "}
              View Recipies
            </Link>
          </form>
        </div>
      </div>
      {/* <section class="get_in_touch">
        <h1 class="title"> Recipe Form</h1>
        <div className="container">
        <div class="form-field col-md-6">
          <input id="name" class="input-text" type="text" name="" />
          <label for="name" class="label">
            Name
          </label>
        </div>
        <div class="form-field col-md-6">
          <input id="email" class="input-text" type="text" name="" />
          <label for="email" class="label">
            Image
          </label>
        </div>
        <div class="form-field col-md-6">
          <input id="company" class="input-text" type="text" name="" />
          <label for="company" class="label">
            Description
          </label>
        </div>
        <div class="form-field col-md-6">
          <input id="phone" class="input-text" type="date" name="" />
          <label for="phone" class="label">
            Recipe_Created
          </label>
        </div>
        <div class="form-field col-md-6">
          
            <Link to="/view" className="btn btn-primary">viewmore</Link>
          
        </div>
        </div>
      </section> */}
    </>
  );
}
export default Form;
