import React from "react"; 
import { Container, Nav, Navbar } from "react-bootstrap";
import styles from "./ProjectTabs.module.css";

//[styles.container, "justify-content-md-center pb-5"].join(" ")
const projectTabsComponent = () => {
    return (
        <>
            <Navbar>
                <Container className="mx-3">
                    <Nav variant="pills" className="me-auto">
                        <Nav.Link href="#" className="me-4">UI/UX Designs</Nav.Link>
                        <Nav.Link href="#" className="me-4">Frontend Development</Nav.Link>
                        <Nav.Link href="#" className="me-4">QA</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default projectTabsComponent;