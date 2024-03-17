/* React */
import { useState, useEffect } from 'react';
import { Router } from "react-router-dom";

/* Boot strap */
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Nav, Navbar} from 'react-bootstrap';


export const NavBar = () =>{

  const[active, setActive] = useState('home');
  const[scrolled, setScrolled] = useState(false);


  useEffect(() =>{
    const onScroll = () =>{
      if(window.scrollY > 50){
        setScrolled(true);
      }else{
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll());

    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const onUpdateActiveLink = (value) =>{
    setActive(value)
  }

      return (
          <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
            <Container>
              <Navbar.Brand href="/" >
                <h1 className="nav-brand">Bunnie<span>.</span>tech</h1>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav">
                <span className="navbar-toggler-icon"></span>
              </Navbar.Toggle>
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                <Nav.Link href="#home" className={active ==='home' ? 'active navbar-link' : 'navbar-link'} onClick={() =>onUpdateActiveLink('home')}>Home</Nav.Link>
                <Nav.Link href="#skills" className={active ==='skills' ? 'active navbar-link' : 'navbar-link'} onClick={() =>onUpdateActiveLink('skills')}>Skills</Nav.Link>
                <Nav.Link href="#work-experience" className={active ==='work-experice' ? 'active navbar-link' : 'navbar-link'} onClick={() =>onUpdateActiveLink('work-experience')}>Work Experience</Nav.Link>
                <Nav.Link href="#projects" className={active ==='projects' ? 'active navbar-link' : 'navbar-link'} onClick={() =>onUpdateActiveLink('projects')}>Projects</Nav.Link>
                </Nav>
                <div className= 'navbar-button'>
                <Nav.Link href="#contact" className={active ==='contact' ? 'active navbar-link' : 'navbar-link'} onClick={() =>onUpdateActiveLink('contact')}>Contact</Nav.Link>
               </div>
              </Navbar.Collapse>
            </Container>
          </Navbar>
      
    )
}