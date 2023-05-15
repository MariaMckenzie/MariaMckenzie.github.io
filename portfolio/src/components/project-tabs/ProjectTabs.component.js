import React from "react"; 
import { Container, Nav, NavItem, Navbar } from "react-bootstrap";
import styles from "./ProjectTabs.module.css";

const projectTabsComponent = () => {
    return (
        <>
            <Navbar>
                <Container className={ [styles.tabs,"m-0 p-0 pb-2"].join(" ") }>
                    <Nav variant="pillls" className="me-auto" role="tablist" defaultActiveKey="p1">
                        <Nav.Link href="#" eventKey="p1" className={ [styles.pill, "me-4"].join(" ") }>UI/UX Designs</Nav.Link>
                        <Nav.Link href="#" eventKey="p2" className={ [styles.pill, "mx-4"].join(" ") }>Frontend Development</Nav.Link>
                        <Nav.Link href="#" eventKey="p3" className={ [styles.pill, "mx-4"].join(" ") }>QA</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default projectTabsComponent;