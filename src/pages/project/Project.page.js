import React from "react";
import { useParams } from 'react-router-dom';
import { Container, Row } from "react-bootstrap";
import NavComponent from "../../components/nav/nav.component";
import FooterComponent from "../../components/footer/footer.component";
import DevProjectDetailsComponent from "../../components/project-details/dev.component";
import QAProjectDetailsComponent from "../../components/project-details/qa.component";
import UIProjectDetailsComponent from "../../components/project-details/ui.component";
import styles from "./Project.module.css";

function ProjectPage () {
    const { type } = useParams();
    return (
        <Container className="p-4">
            {/* navigation bar */}
            <Container>
                <Row className="py-2">
                    <NavComponent />
                </Row>
            </Container>

            {/* projects section */}
            { (type === "development") ? <DevProjectDetailsComponent  /> : false}
            { (type === "uiux") ? <UIProjectDetailsComponent  /> : false}
            { (type === "qa") ? <QAProjectDetailsComponent  /> : false}

            {/* footer */}
            <Container className={ styles.container }>
                <Row className="mt-5">
					<FooterComponent />
				</Row>
            </Container>
		</Container>
    )
}

export default ProjectPage; 