import logo from './logo.svg';
import './App.css';
import Form from './components/form';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import View from './components/view';

function App() {
  return (
    <Router>
      <Routes>
      {<Route path="/"element={<Form/>}/>}
      {<Route path="/view/"element={<View/>}/>}
      </Routes>
    </Router>
    
  )

}

export default App;
