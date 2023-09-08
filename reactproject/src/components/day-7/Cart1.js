import React ,{ useState } from "react";

import "./watch_1.css"
function Quantity(props){
  const [counter, setQuantity] = useState(0);

  const incrementQuantity = () => {
    setQuantity(counter + 1);
    props.updateGrandTotal(props.price);
  };

  const decrementQuantity = () => {
    if (counter > 1) {
      setQuantity(counter - 1);
      props.updateGrandTotal(-props.price);
      
    }
  
  };
  const total = props.price * counter;
  
  return (
   <>
    <tr>
      <td>{props.SNO}</td>
      <td><img src={props.Image} id ="watch_2"/></td>
      <td>{props.Name}</td>
      <td>{"$"}{props.price}</td>
      <td>
      <button type="button"  class="btn btn-warning" onClick={decrementQuantity}>-</button> 
      <h>{counter}</h>
      <button type="button" class="btn btn-success"onClick={incrementQuantity} >+</button> 
      </td>
      <td> {"$"}{total} </td>
    </tr>
    </>
  );
}
export default Quantity;
