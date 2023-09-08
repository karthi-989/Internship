import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function ColorSchemesExample() {
  return (
    <><Navbar bg="primary" data-bs-theme="dark">
<Container>
  <Navbar.Brand href="#home">Navbar</Navbar.Brand>
  <Nav className="me-auto">
    <Nav.Link href="/functionalcomponents">FunctionalComponent</Nav.Link>
    <Nav.Link href="/classcomponent">ClassComponent</Nav.Link>
    <Nav.Link href="/values">Task_1</Nav.Link>
    <Nav.Link href="/basicexample">Task_2</Nav.Link>
    <Nav.Link href="/watches">Watches</Nav.Link>
    <Nav.Link href="/counter">Counter</Nav.Link>
    <Nav.Link href="/regristation">Regristation</Nav.Link>
    <Nav.Link href="/barchart">Barchart</Nav.Link>
    <Nav.Link href="/cart">Cart</Nav.Link>
    
  </Nav>
</Container>
</Navbar>
</>
  );
}

export default ColorSchemesExample;
