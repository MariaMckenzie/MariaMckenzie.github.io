import React from "react"; 
import { Container, Image, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import styles from "./nav.module.css";

function NavComponent () {
    return (
        <Navbar expand="lg" className={ [styles.nav, "container-fluid d-flex px-3" ].join(" ") }>
            <Container>
                <Navbar.Brand href="/">
                    <Image src={logo} alt="brand logo" className={ styles.logo } />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className={ styles.collapseNav } >
                    <Nav className="ms-auto">
                        {/* need to check to see if the link is active */}
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