import React from "react";
import Flipkart from "./Flipkart";
import img from "./watch.jpg";
function Watches(){
const Mywatches=[
    {
        SNO: "1",
        Image: img,
      Name: "MI watch",
      price: 1500,
      qty: 15,
    },
    {
      SNO: "2",
      Image: img,
      Name: "Boat watch",
      price: 2700,
      qty: 1,
    },
    {
      SNO: "3",
      Image:img,
      Name: "FastTrack watch",
      price: 1300,
      qty: 3,
    },
    {
      SNO: "4",
      Image:img,
      Name: "Samsung watch",
      price: 1800,
      qty: 11,
    },
    {
      SNO: "5",
      Image:img,
      Name: "Apple watch",
      price: 3000,
      qty: 0,
    },
  ];
  return(
    <>{
        Mywatches.map(
            (User) => {
                return <Flipkart key ={User.SNO}  SNO={User.SNO} Image={User.Image} Name= {User.Name} price={User.price} qty={User.qty}/>
            }

        )
       
    }
  
    </>
  )
}
export  default Watches;