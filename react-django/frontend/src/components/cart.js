import React, { useEffect, useState  } from "react";
import { useNavigate,Link} from "react-router-dom";
import axios from 'axios';
import './watch.css'
import im from "./watch.jpg"
import { Button } from "primereact/button";
import Piechart from "./piechart";
import Doughnutchart from "./doughnut";
import Barchart from "./barchart";
function Cart(){
    const[data ,setdata]=useState([])
    const[ on ,seton]=useState([])

    

   
  

    const navigate = useNavigate();
    //  const[quantity, setquantity]=useState([])

    function getproducts(){
      axios.get("http://127.0.0.1:8000/app/product/")
      .then(res =>setdata(res.data))
      
    }
    
     useEffect(()=>{
      if (on !==""){
        axios.get(`http://127.0.0.1:8000/app/data/${on}/`)
        .then((res)=>{
          setdata(res.data)
        })
        .catch (err=>console.log(err))
      }
      else{
      getproducts()}
    
     },[on])
     useEffect(()=>{
      getproducts()
     },[])
    //  function handleInput(event){
    //   event.preventDefault();
    //   setquantity({...quantity,[event.target.name]:[event.target.value]})
    //   axios.put('http://localhost:8000',{quantity})
    //   .then(res=>console.log(res.data))
    //   .catch(error => console.log(error))
    
    //  } 
        
    
        function inQuantity(id){
          console.log("incccccc");
          axios.put(`http://127.0.0.1:8000/app/product/${id}/increment/`)
          .then(res => console.log(res.data))
          .catch(error=> console.log(error));
          getproducts();
        }
    
        function deQuantity(id){
          axios.put(`http://127.0.0.1:8000/app/product/${id}/decrement/`)
          .then(res => console.log(res.data))
          .catch(error=> console.log(error));
          getproducts();
          
        }
        const grandtotal=()=>{
          let total=0
          data.forEach(item=>{
            total+=item.quantity*item.price
          })
          return total;
        }
      

        
      
        return (
          <div className="container-md" id="table">
              <div>
        
        <select  onChange={(e)=>(seton(e.target.value))}>
          <option value="select" >SELCT</option>
          <option value="100-1000" >100-1000</option>
          <option value="1000-2000">1000-2000</option>
          <option value="2000-3000">2000-3000</option>
        </select>
        
      </div>
        {/* <div  class="button-container">
        <Link to="/barchart"  className="btn btn-primary">Barchart</Link>
        <Link to="/piechart"  className="btn btn-primary">Piechart</Link>
        <Link to="/doughnut"  className="btn btn-primary">Doughnut</Link>
        
        
        
        </div> */}
       
          <table className="table table-striped" >
      
            <thead className="table-dark">
              <tr>
                <th scope="col">Product Id</th>
                <th scope="col">Image</th>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">Total</th>
                <th scope="col">View Details</th>
              </tr>
            </thead>
        <tbody>
          
          {data.map((item) =>(
    
            
            
                <tr key={item.id}>
                  <td><b>{item.product_id}</b></td>
                  <td> <img src={im} alt="watch" id="watch"/></td>
                  <td><b>{item.name}</b></td>
                  <td><b>{"$"}{item.price}</b></td>
                  <td>
                  <button type="button" onClick={()=>deQuantity(item.product_id)}   className="btn btn-danger" >-</button> 
                   <b>{item.quantity}</b>
                   <button type="button"  onClick={()=>inQuantity(item.product_id)}  className="btn btn-warning" >+</button> 
                  </td>
                  <td>{'$'}{item.price*item.quantity}</td>
                  <td><Link to={`/view/${item.id}`} className="btn btn-primary"> View More</Link> </td>
                  
                </tr>) )}
                <tr>
                  <td colSpan='4'></td>
                  <td><b> Grand Total:</b></td>
                  <td><b>{grandtotal()} </b></td>
                  <td></td>
                </tr>
        </tbody>
        </table>
        <div class="row">
    <div class="col">
      <Barchart />
    </div>
    <div class="col">
      <Piechart />
    </div>
    <div class="col">
      <Doughnutchart />
    </div>
  </div>
        </div>
        )
      
}
export default Cart