import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import axios from 'axios';
import { useState,useEffect } from 'react';

const Doughnutchart=()=> {

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
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
              ],
              borderWidth: 1,
            }
        ]
    }
    const options={

    }
   
  return (
    <div>
        <div className='doughnut'>
            <Doughnut data={da} options={options} ></Doughnut>
        </div>
    </div>

  )
}
   
export default Doughnutchart;