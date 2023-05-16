import React from "react"; 
import { Container, Nav, Navbar } from "react-bootstrap";
import styles from "./Tabs.module.css";

//[styles.container, "justify-content-md-center pb-5"].join(" ")
const tabsComponent = () => {
     return (
        <>
            <Navbar>
                <Container className="p-0">
                    <Nav className="me-auto">
                        <Nav.Link href="#" className={styles.link}>Skills</Nav.Link>
                        <Nav.Link href="#" className={styles.link}>Other Skills</Nav.Link>
                        <Nav.Link href="#" className={styles.link}>Education</Nav.Link>
                        <Nav.Link href="#" className={styles.link}>Achievements</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default tabsComponent;