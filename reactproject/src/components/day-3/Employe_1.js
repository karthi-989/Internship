import React from "react";
import './style.css'
function Cards (props){
    return(
        <>
  <div class="card text-black mb-3" id="emcard">
  <div class="card-header bg-success">{props.Head}</div>
  <div class="card-body">
    <h5 class="card-title">{props.Title}</h5>
    <p class="card-text">my name is {props.Name} and iam {props.Age} old</p>
  </div>
</div>
    
        </>
    )
}
export default Cards;