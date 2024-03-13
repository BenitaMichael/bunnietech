import { useState, useEffect } from 'react';
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

    return(
        <Navbar expand="lg" className= {scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">BUNNIE.tech</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={active ==='home' ? 'active navbar-link' : 'navbar-link'} onClick={}>Home</Nav.Link>
            <Nav.Link href="#skills" className={active ==='skills' ? 'active navbar-link' : 'navbar-link'}>Skills</Nav.Link>
            <Nav.Link href="#work-experience" className={active ==='work-experice' ? 'active navbar-link' : 'navbar-link'}>Work Experience</Nav.Link>
            <Nav.Link href="#projects" className={active ==='projects' ? 'active navbar-link' : 'navbar-link'}>Projects</Nav.Link>
            <Nav.Link href="#contact" className={active ==='contact' ? 'active navbar-link' : 'navbar-link'}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}