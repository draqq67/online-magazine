// import { Link } from "react-router-dom"
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import './Navbar.css';

import logo from '../../photos/logo.jpg'



export default function PageNavbar ()
{

    return (
        <Navbar expand="lg" className=" bg-secondary bg-gradient">
            <Navbar.Toggle  className='navbar-toggler ml-auto hidden-sm-up float-xs-right' data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"/>
            <Navbar.Brand >
                <img src={logo}
                height="30"
                width="auto"
                alt="Dragos News">
                 </img>
                Dragos News
            </Navbar.Brand>
            <Navbar.Collapse>
            <Container className="leftnav">     
            <Nav className='me-auto'>
            <Nav.Link href="/">
                Home
            </Nav.Link>
            <Nav.Link href ="/aboutus">
                AboutUs
            </Nav.Link>
            <Nav.Link href="/news">
                News
            </Nav.Link>
            </Nav>
            </Container>
            <Container className="rightnav">
               <Nav>
                <Nav.Link href="/post">
                    Post a News
                </Nav.Link>
                <Nav.Link href="#">
                    Support
                </Nav.Link>
                <Nav.Link href="/subscribe">
                    Subscribe
                </Nav.Link>
                </Nav>
            </Container>
            </Navbar.Collapse>
        </Navbar>
    
    )
}