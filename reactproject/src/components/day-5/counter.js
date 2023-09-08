import React from "react";
import "./counter.css"
import   { useState } from "react";

const Counter = () => {
    
    const [counter, setCounter] = useState(0);
    
    const handleClick1 = () => {
     
      setCounter(counter + 1)
     
    }
    
   
    const handleClick2 = () => {
        if (counter > 0) {
          setCounter(count => count - 1);
         
        }
      };
return(
    <div class="card "  id ="countercard">
  <div class="card-header text-bg-primary" >Counter</div>
  <div class="card-body">
    <h5 class="card-title" id="title">{counter}</h5>
  <button onClick={handleClick1} type="button" class="btn btn-success">Increase</button> 
  
  <button onClick={handleClick2} type="button" class="btn btn-warning" id ="btn2">Decrease </button>
  </div>
</div>
)
}
export default Counter