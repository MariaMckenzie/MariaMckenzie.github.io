import React from "react";
import { Container, Row } from "react-bootstrap";
import NavComponent from "../../components/nav/Nav.component";
import QAProjectListComponent from "../../components/project-list/qa.component";
import UIProjectListComponent from "../../components/project-list/ui.component";
import DevProjectListComponent from "../../components/project-list/dev.component";
import FooterComponent from "../../components/footer/footer.component";
import styles from "./Portfolio.module.css";

function PortfolioPage () {
    return (
        <Container className="p-4">
            {/* navigation bar */}
            <Container>
                <Row className="py-2">
                    <NavComponent />
                </Row>
            </Container>

            {/* projects section */}
            <h3 className={ styles.heading }>Portfolio</h3>
            
            <UIProjectListComponent />
            <DevProjectListComponent />
            <QAProjectListComponent /> 

            {/* footer */}
            <Container className={ styles.container }>
                <Row className="mt-5">
					<FooterComponent />
				</Row>
            </Container>
		</Container>
    )
}

export default PortfolioPage; 