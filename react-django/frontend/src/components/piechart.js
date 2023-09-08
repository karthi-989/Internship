import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import axios from 'axios';
import { useState,useEffect } from 'react';

const Piechart=()=> {

        ChartJS.register(ArcElement, Tooltip, Legend)
    
    const price=[]
    const name=[]
    const[inm,setinm]=useState([])
    useEffect(()=>{
      axios.get("http://127.0.0.1:8000/app/product/").then(res=>{
          setinm(res.data)
      }).catch(err=>console.log(err))
      },[])

      {inm.map((item)=>{
        price.push(item.price)
        name.push(item.name)
      })}
      console.log(name)

      const da={
        
        labels: name,
        datasets:[
            {
            label:'prices',
            data:price,
            backgroundColor: [
                "red",
                "rgb(0,255,255)",
                "green",
                "grey",
                "black",
              ],
              borderColor: [
               "red",
               "rgb(0,255,255)",
               "green",
               "grey",
               "black",
              ],
              borderWidth: 1,
            }
        ]
    }
    const options={

    }
   
  return (
    <div>
        <div >
            <Pie data={da} options={options} ></Pie>
        </div>
    </div>

  )
}
   
export default Piechart;