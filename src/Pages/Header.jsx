import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Men from './Men';



const Header=()=>{
    return(
        <>
        <div style={{backgroundColor:"black",height:"20px",color:"white"}}>Download</div>
         <Navbar bg="light" data-bs-theme="light" style={{padding:"00px,100px,0px,100px",marginTop:"5px"}}>
        <Container>
          <Navbar.Brand href="#home">His&Her</Navbar.Brand>
          <Nav id='nav' className="me-auto" style={{fontFamily:"cursive",paddingLeft:"100px", fontSize:"22px", gap:"30PX"}}>
            <Nav.Link as={Link} to={'women'}>Women</Nav.Link>
            <Nav.Link as={Link} to={'men'}>Men</Nav.Link>
            <Nav.Link as={Link} to={'home'}>Home</Nav.Link>
            <Nav.Link as={Link} to={'allbrands'}>All Brands</Nav.Link>
            <Nav.Link as={Link} to={'about'}>About</Nav.Link>
          </Nav>
        </Container>


        {/* THIS IS THE SEARCH BAR SECTION */}


        <Container>
        <div style={{ display:"flex",gap:"40px",marginLeft:"180px", fontFamily:"cursive"}}>
       
          <Nav.Link as={Link} to={'account'}>Account</Nav.Link>
            <Nav.Link as={Link} to={'wishlist'}>Wishlist</Nav.Link>
            <Nav.Link as={Link} to={'cart'}>Cart</Nav.Link></div>

            
        <Form className="d-flex">
          
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
         
          
          </Form>
          </Container>
      </Navbar>


     

<Men/>



        
        </>
    )
}
export default Header;