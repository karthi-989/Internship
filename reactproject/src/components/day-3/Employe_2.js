import React from "react";
import "./style.css"
 class Employe extends React.Component{
    render(){
        return(
        <div class="card text-black bg-success mb-3" id="emcard">
            <div class="card-body ">
                <h5 class="card-title">Welcome to  {this.props.Name}</h5>
                <p class="card-text">Course:{this.props.Course}</p>
                <p class="card-text">{'{'}"Name":"{this.props.Name}" "Course:" "{this.props.Course}"{'}'}</p>
            </div>
        </div>
        )
    }
 }
 export default Employe;