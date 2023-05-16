import React from "react"; 
import { Container, Image, Nav, Navbar } from "react-bootstrap";
import logo from "../../assets/images/logo.png";
import styles from "./Nav.module.css";
import { Link } from "react-router-dom";

//[styles.container, "justify-content-md-center pb-5"].join(" ")
const navComponent = () => {
    return (
        <>
            <Navbar>
                <Container className="mx-3">
                    <Navbar.Brand className="mx-3" href="/">
                        <Image src={logo} alt="brand logo" className={styles.logo} />
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Link to="/" className="me-4">Home</Link>
                        <Link to="/portfolio" className="me-4">Portfolio</Link>
                        {/* <Nav.Link href="#">Resume</Nav.Link> */}
                        <Link to="/contact-me" className="me-4">Contact</Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default navComponent;