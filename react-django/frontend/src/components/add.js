import React from "react";
import { Link } from "react-router-dom";
function ADD(){
    return(
        <div class="container mt-5">
        <h1>User Registration Form</h1>
        <form>
          <div class="form-group">
            <label for="serialNo">Serial Number</label>
            <input type="number" class="form-control" id="serialNo" name="serialNo" placeholder="Serial Number"/>
          </div>
          <div class="form-group">
            <label for="firstName">First Name</label>
            <input type="text" class="form-control" id="firstName" name="firstName" placeholder="First Name"/>
          </div>
          <div class="form-group">
            <label for="lastName">Last Name</label>
            <input type="text" class="form-control" id="lastName" name="lastName" placeholder="Last Name"/>
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" class="form-control" id="email" name="email" placeholder="Email"/>
          </div>
          <div class="form-group">
            <label for="course">Course</label>
            <input type="text" class="form-control" id="course" name="course" placeholder="Course"/>
          </div>
          <div className="d-flex justify-content-end">
      <Link to="/" className="btn btn-primary"> CREATE</Link>

    </div>
        </form>
      </div>
    )
}
export default ADD