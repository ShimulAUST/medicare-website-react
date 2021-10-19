import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css';
const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Medicare</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">More deets</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                Dank memes
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {/* <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="">Medicare</Navbar.Brand>
                    <Nav className="me-auto">
                        <Link to="/home">Home</Link>
                        <Link to="/services">Services</Link>
                        <Link to="/about">About Us</Link>
                        <Link to="/contact">Contact Us</Link>
                        <Link to="/login">Login</Link>
                        <span> {user.displayName} </span>
                        {user?.email && < button onClick={logOut}> Log Out</button>}
                    </Nav >
                </Container>
            </Navbar > */}
        </div >
    );
};

export default Header;



    // <Nav.Link href="#home">Home</Nav.Link>
    // <Nav.Link href="#features">Features</Nav.Link>
    // <Nav.Link href="#pricing">Pricing</Nav.Link>
