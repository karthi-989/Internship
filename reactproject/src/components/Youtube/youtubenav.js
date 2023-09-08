import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import im from "./youtube.svg";
import { InputText } from "primereact/inputtext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Youtubeprops from "./Youtube";
import {
  faAdd,
  faArrowAltCircleRight,
  faBaseball,
  faBell,
  faClipboard,
  faDashboard,
  faFileVideo,
  faGamepad,
  faGraduationCap,
  faHistory,
  faHome,
  faMicrophone,
  faMusic,
  faNewspaper,
  faShirt,
  faShop,
  faShoppingBag,
  faStream,
  faSubscript,
  faTelevision,
  faTractor,
  faUser,
  faUserCircle,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import "./style.css";
import Card from "react-bootstrap/Card";
import Yotubeprops from "./Youtube";
import { useState } from "react";
function Youtube() {
  const [sidebar_content, setNavCollapse] = useState(true)
    const [maindivv, setContentCollapsed] = useState(false);
    const [collapseDiv,setCollapseDiv]=useState(false)
    const showSideBar = () => {
        setNavCollapse(!sidebar_content)
        setContentCollapsed(!maindivv)
        setCollapseDiv(!collapseDiv)
    }
  return (
    <div style={{height:"990px",overflow:"hidden"}} >
      <div  style={{position:"fixed",position:"relative"}} >
      <Navbar expand="lg" className="bg-body-tertiary" >
        <Container fluid>
          <Navbar.Brand href="#">
            {" "}
            <span class="navbar-toggler-icon"on onClick={showSideBar} > </span>
          </Navbar.Brand>
          {/* <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
          </Navbar.Collapse> */}
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <div style={{ marginTop: "5px" }}>
                <a href="#">
                  <img src={im} style={{ width: "100px", maxheight: "100" }} />
                </a>
              </div>
              <div style={{ marginLeft: "500px" }}>
                <Form>
                  <Form.Control
                    style={{
                      width: "500px",
                      borderRadius: "20px",
                      alignItems: "center",
                    }}
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                </Form>
              </div>
              <div
                style={{
                  border: "4px",
                  borderColor: "black",
                  borderRadius: "20px",
                  backgroundColor: "",
                  
                }}
              >
                <FontAwesomeIcon
                  icon={faMicrophone}
                  style={{ width: "40px", height: "23px",margin:"6px 0px" }}
                />
              </div>
              <div style={{ marginLeft: "450px", marginTop: "3px" }}>
                <FontAwesomeIcon
                  icon={faVideo}
                  style={{ width: "40px", height: "25px", padding: "5px" }}
                />
                <FontAwesomeIcon
                  icon={faBell}
                  style={{ width: "40px", height: "25px", padding: "5px" }}
                />
                <FontAwesomeIcon
                  icon={faUserCircle}
                  style={{ width: "45px", height: "27px", padding: "5px" }}
                />
              </div>
            </Nav>
         
        </Container>
      </Navbar>
      </div>
      <div >
      
        <div  class="sidenav"   style={{ width: "12%", height: "100%" ,}}>
        <div  className={sidebar_content ? "nav-menu active" : "nav-menu"}>
          <button class="btn">
            <FontAwesomeIcon
              icon={faHome}
              className="icon"
              style={{ width: "25px" }}
            />
            <b>Home</b>
          </button>

          <button class="btn">
            <FontAwesomeIcon
              icon={faSubscript}
              className="icon"
              style={{ width: "25px" }}
            />
            <b>Shorts</b>
          </button>

          <button class="btn">
            <FontAwesomeIcon
              icon={faDashboard}
              className="icon"
              style={{ width: "25px" }}
            />
            <b>Subscription</b>
          </button>
          <hr></hr>

          <button class="btn">
            <FontAwesomeIcon
              icon={faClipboard}
              className="icon"
              style={{ width: "25px" }}
            />
            <b>Library</b>
          </button>

          <button class="btn">
            <FontAwesomeIcon
              icon={faHistory}
              className="icon"
              style={{ width: "25px" }}
            />
            <b>History</b>
          </button>

          <button class="btn">
            <FontAwesomeIcon
              icon={faArrowAltCircleRight}
              className="icon"
              style={{ width: "25px" }}
            />
            <b>Watch Later</b>
          </button>

          <button class="btn">
            <FontAwesomeIcon
              icon={faVideo}
              className="icon"
              style={{ width: "25px" }}
            />
            <b>Liked Videos</b>
          </button>
          <hr></hr>
          <p style={{ marginLeft: "23px" }}>Subscriptions</p>

          <button class="btn">
            <FontAwesomeIcon
              icon={faUserCircle}
              className="icon"
              style={{ width: "25px" }}
            />
            <b>Subscription</b>
          </button>

          <button class="btn">
            <FontAwesomeIcon
              icon={faAdd}
              className="icon"
              style={{ width: "25px" }}
            />
            <b>Browse Chanels</b>
          </button>
          <hr></hr>
          <p style={{ marginLeft: "23px" }}>Explore</p>

          <button class="btn">
            <FontAwesomeIcon
              icon={faTelevision}
              className="icon"
              style={{ width: "25px" }}
            />
            <b>Trending</b>
          </button>

          <button class="btn">
            <FontAwesomeIcon
              icon={faShoppingBag}
              className="icon"
              style={{ width: "25px" }}
            />
            <b>Shopping</b>
          </button>

          <button class="btn">
            <FontAwesomeIcon
              icon={faMusic}
              className="icon"
              style={{ width: "25px" }}
            />
            <b>Music</b>
          </button>

          <button class="btn">
            <FontAwesomeIcon
              icon={faVideo}
              className="icon"
              style={{ width: "25px" }}
            />
            <b>Movies</b>
          </button>

          <button class="btn">
            <FontAwesomeIcon
              icon={faStream}
              className="icon"
              style={{ width: "25px" }}
            />
            <b>Live</b>
          </button>

          <button class="btn">
            <FontAwesomeIcon
              icon={faGamepad}
              className="icon"
              style={{ width: "25px" }}
            />
            <b>Gaming</b>
          </button>

          <button class="btn">
            <FontAwesomeIcon
              icon={faNewspaper}
              className="icon"
              style={{ width: "25px" }}
            />
            <b>News</b>
          </button>

          <button class="btn">
            <FontAwesomeIcon
              icon={faBaseball}
              className="icon"
              style={{ width: "25px" }}
            />
            <b>Sports</b>
          </button>

          <button class="btn">
            <FontAwesomeIcon
              icon={faGraduationCap}
              className="icon"
              style={{ width: "25px" }}
            />
            <b>Learning</b>
          </button>

          <button class="btn">
            <FontAwesomeIcon
              icon={faShirt}
              className="icon"
              style={{ width: "25px" }}
            />
            <b>Fashion&Beauty</b>
          </button>
          <button class="btn">
            <FontAwesomeIcon
              icon={faVideo}
              className="icon"
              style={{ width: "25px" }}
            />
            <b>Movies</b>
          </button>

          <button class="btn">
            <FontAwesomeIcon
              icon={faStream}
              className="icon"
              style={{ width: "25px" }}
            />
            <b>Live</b>
          </button>

          <button class="btn">
            <FontAwesomeIcon
              icon={faGamepad}
              className="icon"
              style={{ width: "25px" }}
            />
            <b>Gaming</b>
          </button>

          <button class="btn">
            <FontAwesomeIcon
              icon={faNewspaper}
              className="icon"
              style={{ width: "25px" }}
            />
            <b>News</b>
          </button>

          <button class="btn">
            <FontAwesomeIcon
              icon={faBaseball}
              className="icon"
              style={{ width: "25px" }}
            />
            <b>Sports</b>
          </button>

          <button class="btn">
            <FontAwesomeIcon
              icon={faGraduationCap}
              className="icon"
              style={{ width: "25px" }}
            />
            <b>Learning</b>
          </button>

          <button class="btn">
            <FontAwesomeIcon
              icon={faShirt}
              className="icon"
              style={{ width: "25px" }}
            />
            <b>Fashion&Beauty</b>
          </button>
        </div>
        </div>

        <div style={{ width: "88%",position:"relative",float:"right",}} className={maindivv ? " content collapsed" : " content"} >

        
          <div
            style={{
              width:"100%",
              display: "flex",
              flexDirection: "row",
              columnGap: "10px",
              position:"fixed",
              marginLeft:"19px"
              // backgroundColor:"green"

            }}
          >
            <button type="buttton" class="btn  " id="topbtn">
              All
            </button>
            <button type="buttton" class="btn  " id="topbtn">
              Trailers
            </button>
            <button type="buttton" class="btn  " id="topbtn">
              Music
            </button>
            <button type="buttton" class="btn  " id="topbtn">
              Wickets
            </button>
            <button type="buttton" class="btn  " id="topbtn">
              Action Thrillers
            </button>
            <button type="buttton" class="btn  " id="topbtn">
              Live
            </button>
            <button type="buttton" class="btn  " id="topbtn">
              T-series
            </button>
            <button type="buttton" class="btn  " id="topbtn">
              Gaming
            </button>
            <button type="buttton" class="btn  " id="topbtn">
              Filmi
            </button>
            <button type="buttton" class="btn  " id="topbtn">
              Artificial Satellite
            </button>
            <button type="buttton" class="btn  " id="topbtn">
              Mantras
            </button>
            <button type="buttton" class="btn  " id="topbtn">
              Astronomy
            </button>
            <button type="buttton" class="btn  " id="topbtn">
              Game Shows
            </button>

          </div>
          <div
            style={{
              width: "100%",
              height:"1000px",
              marginTop: "50px",
              display:"flex",
              flexWrap:"wrap",
              columnGap:"30px",
              rowGap:"50px",
              // backgroundColor:"red",
              overflow:"auto",
              // backgroundColor:"blue"  
              justifyContent:"space-evenly"        
            }}
            className="cr"
          > <Youtubeprops/>
          </div>
          </div>
  
      </div>
      <div className={collapseDiv ? "newContent active" :"newContent"}>
                <div className='collapse-divCon'>
                    <button>
                    <i className='pi pi-home ' />
                    <h6>Home</h6></button>
                </div>
                <div className='collapse-divCon'>
                    <button>
                    <i className='pi pi-video ' />
                    <h6>shorts</h6></button>
                </div>
                <div className='collapse-divCon'>
                    <button>
                    <FontAwesomeIcon icon={faFileVideo} />
                    <h6>Subscription</h6></button>
                </div>
                <div className='collapse-divCon'>
                    <button>
                    <img src='https://static.vecteezy.com/system/resources/previews/011/994/022/original/simple-video-library-icon-sign-design-free-png.png' style={{ width: "25px" }} />
                    <h6>library</h6></button>
                </div>
                <div className='collapse-divCon'>
                    <button>
                    <i className='pi pi-arrow-down ' />
                    <h6>Downloads</h6></button>
                </div>
            </div>

    </div>
  );
}

export default Youtube;
