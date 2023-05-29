import React from "react"; 
import { NavLink } from "react-router-dom";
import { Container, Image, Nav, Navbar } from "react-bootstrap";
import logo from "../../assets/images/logo.png";
import styles from "./nav.module.css";

function NavComponent ( activeLink ) {
    return (
        <Navbar expand="lg" className={ [styles.nav, "container-fluid mx-auto" ].join(" ") }>
            <Container className="mx-3 navbar-nav">
                <Navbar.Brand className="mx-3" href="/">
                    <Image src={logo} alt="brand logo" className={ styles.logo } />
                </Navbar.Brand>

                {/* toggle navbar between expanded form and hamburger menu */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className={ styles.collapseNav }> {/* add styles for hamburger menu */}
                
                <Nav className="ms-auto">
                    {/* check to see if the link is active. may need to fix but this will solve the issue of the active not being displayed */}
                    <NavLink to="/" className={styles.link }>Home</NavLink>
                    <NavLink to="/portfolio" className={ styles.link }>Portfolio</NavLink>
                    <NavLink to="/resume" className={ styles.link }>Resume</NavLink>
                    {/* <NavLink to="/certificates" className={ styles.link }>Certificates</NavLink> */}
                    {/* <NavLink to="/contact-me" className={ styles.link }>Contact</NavLink> */}
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavComponent;