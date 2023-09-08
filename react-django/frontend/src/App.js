import React from "react";
import User from "./components/User";
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Cart from "./components/cart";
import View from "./components/view";
import BarChartComponent from "./components/barchart";
import Doughnutchart from "./components/doughnut";
import Piechart from "./components/piechart";

function App(){
  return(<>
   {/* <User />  */}

  <Router>
    <Routes>
      { <Route path="/" element={<Cart />} /> }
      {<Route path="view/:id"element={<View/>}/>}
      
      
        
    </Routes>

  </Router>/
 
  

  </>
  );
}
export default App;