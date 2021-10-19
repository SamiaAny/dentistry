import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../../../hooks/useFirebase';
import pro_pic from '../../../images/undraw_profile_pic_ic5t.svg';
import './NavMenu.css';


const NavMenu = () => {
    const { user, logOut } = useFirebase();
    return (
        <>
            {/* <Container>
            <h1>Dentistry</h1>
            </Container> */}
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Dentistry</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/about">About</Nav.Link>
                            <Nav.Link as={Link} to="/services">Services</Nav.Link>
                            <Nav.Link as={Link} to="/appointment">Appoinment</Nav.Link>
                            <Nav.Link as={Link} to="/dentists">Dentists</Nav.Link>
                            {user?.email && 
                                <div className="mx-3">
                                    <img className="nav-img" src={user?.photoURL ? user?.photoURL : pro_pic} alt="" />
                                    <span className="text-white ms-2">{user?.displayName}</span>
                                </div>  
                            }
                            {user?.email ?
                                <Button variant="outline-light" onClick={logOut}>Logout</Button>
                                :
                                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                            }
                            
                            

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default NavMenu;