import React, { Component } from "react";

class ClassComponent extends Component {
  state = {
    name: "Karthil",
  };
  
  componentDidMount() {
    console.log("Mounted");
  }

  render() {
    return <h2> ClassComponent</h2>;
  }
}
export default ClassComponent;
