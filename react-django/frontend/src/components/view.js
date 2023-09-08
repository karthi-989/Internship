import React, { useState } from "react";
import { useLocation, useParams} from "react-router-dom";
import { Link } from "react-router-dom";
import "./card.css"
import { useEffect } from "react";
import  axios  from "axios";
import img from "./watch.jpg"


function View(){
    const location =useLocation()
    const[data, setData]=useState([])
    const{id}=useParams()
    useEffect(()=>{
        axios.get("http://127.0.0.1:8000/app/product1/"+id+"/")
        .then((res)=>setData(res.data))
    },[])
    return(
        <>
        <nav>
                <Link to="/"
                    className={location.pathname === "/" ? "breadcrumb-active" : "breadcrumb-not-active"}
                > 
                    Home
                </Link>
                <span className="breadcrumb-arrow">&gt;</span>
                <Link to={'view/${id}'}
                    className={location.pathname.startsWith("/view") ? "breadcrumb-active" : "breadcrumb-not-active"}
                >
                    Product
                </Link>
                
            </nav>
        <div className="container" id="card" >
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <img src={img} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">WatchName:<b>{data.name}</b></h5>
                <p class="card-text"><b>Cost: </b> ${data.price}</p> 
                <p> <b>{data.Description}</b></p>              
              </div>
            </div>  
          </div>
        </div>
        </div>
        </>
    )
}
export default View