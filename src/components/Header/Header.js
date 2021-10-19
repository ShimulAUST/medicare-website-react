import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../hooks/useAuth';
//import './Header.css';
const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div>

            <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Medicare</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
                        <Nav.Link as={Link} to="/teams">Our Team</Nav.Link>
                        <Nav.Link as={Link} to="/booking">Booking</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#contact">Contact Us</Nav.Link>
                        {user.email ?
                            <Button onClick={logOut} variant="light">Log Out</Button> :
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        }
                        {
                            user.email ?
                                <Navbar.Text>
                                    Signed in as:  {(user.displayName && user.email) ?
                                        <span>{user.displayName}</span> :
                                        <span>{user.email}</span>
                                    }
                                </Navbar.Text> :
                                <></>
                        }
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
