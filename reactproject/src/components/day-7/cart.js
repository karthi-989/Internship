import React, { useState } from "react";
import Quantity from "./Cart1";
import im from "./watch1.webp";

function Cart() {
  const products = [
    {
        SNO: "1",
        Image:im,
        Name: "MI watch",
        price: 1500,
      },
      {
        SNO: "2",
        Image: im,
        Name: "Boat watch",
        price: 2700,
      },
      {
        SNO: "3",
        Image: im,
        Name: "FastTrack watch",
        price: 1300,
      },
      {
        SNO: "4",
        Image: im,
        Name: "Samsung watch",
        price: 1800,
      },
      {
        SNO: "5",
        Image: im,
        Name: "Apple watch",
        price: 3000,
      }
  ];
  const [grandTotal, setGrandTotal] = useState(0);

  const updateGrandTotal = (total) => {
    setGrandTotal(grandTotal + total);
  };
  return (
    <div>
      <table className="table table-striped" id="table">
        <thead className="table-dark">
          <tr>
            <th scope="col">Product Id</th>
            <th scope="col">Image</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Total</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <Quantity
              key={product.SNO}
              SNO={product.SNO}
              Image={product.Image}
              Name={product.Name}
              price={product.price}
              qty={product.qty}
              updateGrandTotal={updateGrandTotal}
        
            />

          ))} 
          <tr>
            <td  style= {{textAlign:"right"}}colSpan={5} >
                Grand total:{"$"}
              {grandTotal}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}


export default Cart;
