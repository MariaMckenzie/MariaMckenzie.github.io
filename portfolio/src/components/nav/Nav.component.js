import React from "react"; 
import { Container, Image, Nav, Navbar } from "react-bootstrap";
import logo from "../../assets/images/logo.png";
import styles from "./Nav.module.css";

//[styles.container, "justify-content-md-center pb-5"].join(" ")
const navComponent = () => {
     return (
        <>
            <Navbar>
                <Container className="mx-3">
                    <Navbar.Brand className="me-5">
                        <Image src={logo} alt="brand logo" className={styles.logo} />
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#">Home</Nav.Link>
                        <Nav.Link href="#">Portfolio</Nav.Link>
                        <Nav.Link href="#">Resume</Nav.Link>
                        <Nav.Link href="#">Contact</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default navComponent;