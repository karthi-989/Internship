import React from "react";
import { Card } from "react-bootstrap";
import "./cards.css"
function  Cards(props){
 
    return(
        <div  >
        <Card  style={{ width: "18rem" ,borderRadius:"", height:"18rem" }} className= "border-0">
        <Card.Img variant="top" className="" src={props.img} style={{height:"55%",borderRadius:"10px"}} />
        <Card.Body >
          <div  style={{width:"100%",display:"flex",}}>
            <div style={{width:"15%",}} className="card-top">
             {/* <FontAwesomeIcon icon={faUserCircle} style={{width:"100%",height:"40px"}}></FontAwesomeIcon> */}
            
             <img src={props.img2} alt="" style={{height:"40px",width:"100%",borderRadius:"50%"}} />
             </div>
             <div  style={{width:"85%",marginLeft:"7px"}}>
             <Card.Title>{props.tittle}</Card.Title>
             </div>
            </div> 
          <div style={{width:"100%",marginLeft:"10px"}} className="car-details">
          <Card.Text className="text-muted">
          <div style={{marginLeft:"33px"}}>
          <div> {props.Production}</div>
            <div>{props.date}</div>
          </div>
          </Card.Text>
          </div>
          
        </Card.Body>
      </Card>
      </div>
    )
}
export default Cards