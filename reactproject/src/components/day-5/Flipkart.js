import React from "react";
import "./watch.css";

function Flipkart(props) {
  if (props.qty >= 10) {
    return (
      <>
        <div class="card mb-3 shadow-lg" id="product" style={{ width: 520 }}>
          <div class="row g-0">
            <div class="col-md-4">
              <img
                src={props.Image}
                class="img-fluid rounded-start"
                alt="smartwatch"
                id="watch_1"
              />
            </div>
            <div class="col-md-8 ">
              <div class="card-body">
                <h3 class="card-title ">{props.Name} </h3>
                <p class="card-text fw-light fs-5">
                  {"₹"}
                  {props.price}
                </p>
                <p class="card-text text-success fs-4 fw-light">Available</p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else if (props.qty <= 10 && props.qty >= 1) {
    return (
      <div class="card mb-3 shadow-lg" id="product" style={{ width: 520 }}>
        <div class="row g-0">
          <div class="col-md-4">
            <img
              src={props.Image}
              class="img-fluid rounded-start"
              alt="smartwatch"
              id="watch_1"
            />
          </div>
          <div class="col-md-8 ">
            <div class="card-body">
              <h3 class="card-title">{props.Name} </h3>
              <p class="card-text fw-light fs-5">
                {"₹"}
                {props.price}
              </p>
              <p class="card-text text-warning fs-4 fw-light">
                almost out of stock
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div class="card mb-3 shadow-lg" id="product" style={{ width: 520 }}>
        <div class="row g-0">
          <div class="col-md-4">
            <img
              src={props.Image}
              class="img-fluid rounded-start"
              alt="smartwatch"
              id="watch_1"
            />
          </div>
          <div class="col-md-8 ">
            <div class="card-body">
              <h3 class="card-title ">{props.Name} </h3>
              <p class="card-text fw-light fs-5">
                {"₹"}
                {props.price}
              </p>
              <p class="card-text text-danger fs-4 fw-light"> out of stock</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Flipkart;
