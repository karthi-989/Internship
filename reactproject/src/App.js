import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FunctionalComponent from "./components/day-2/FunctionalComponent";
import ClassComponent from "./components/day-2/ClassComponent";
import BasicExample from "./components/day-2/Task_2";
import Value from "./components/day-3/values";
import ColorSchemesExample from "./components/day-3/Navbar";
import Watches from "./components/day-5/task_5";
import Counter from "./components/day-5/counter";
import Regristation from "./components/day-6/registration";
import Barchart from "./components/day-6/barchart";
import Quantity from "./components/day-7/Cart1";
import Cart from "./components/day-7/cart";
import Youtube from "./components/Youtube/youtubenav";
import Youtubeprops from "./components/Youtube/Youtube";
import Cards from "./components/Youtube/cards";

function App() {
  // const [show, setShow] = useState(true);
  return (
    <>
      {/* <Router>
  <ColorSchemesExample/>
        <Routes>
           
          <Route path="/functionalcomponents" element={<FunctionalComponent/>} />
          <Route path="/classcomponent" element={<ClassComponent/>} />
          <Route path="/basicexample" element={<BasicExample/>} />
          <Route path="/values" element={<Value/>} />
          <Route path="/watches" element={<Watches/>} />
          <Route path="/counter" element={<Counter/>} />
          <Route path="/regristation" element={<Regristation/>} />
          <Route path="/barchart" element={<Barchart/>} />
          <Route path="/cart" element={<Cart/>} />
          
        </Routes>
  
      </Router> */}
      {/* <Watches/> */}
      {/* <Counter/> */}
      {/* <Regristation/> */}
      {/* <Barchart/>  */}
      {/* <Cart/> */}
      {/* <BasicExample/> */}

      <Youtube/>
      {/* <Cards/> */}

      {/* <div>
        {show ? <h1>Hello, I am Muskan.</h1> : null}
        <button onClick={() => setShow(!show)}>Toggle</button>
      </div> */}
    </>
  );
}
export default App;
