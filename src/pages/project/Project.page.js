import React from "react";
import { useParams, Link } from 'react-router-dom';
import { Container, Row } from "react-bootstrap";
import NavComponent from "../../components/nav/Nav.component";
import FooterComponent from "../../components/footer/footer.component";
import DevProjectDetailsComponent from "../../components/project-details/dev.component";
import QAProjectDetailsComponent from "../../components/project-details/qa.component";
import UIProjectDetailsComponent from "../../components/project-details/ui.component";
import styles from "./Project.module.css";

function ProjectPage () {
    const { type } = useParams();
    return (
        <Container className="p-4">
            <Container className={ styles.container }>
                {/* navigation bar */}
                <Row className="py-2">
                    <NavComponent />
                </Row>

                {/* projects section */}
                <Row className="pb-4 px-4">
                    { (type === "development") ? <DevProjectDetailsComponent  /> : false}
                    { (type === "uiux") ? <UIProjectDetailsComponent  /> : false}
                    { (type === "qa") ? <QAProjectDetailsComponent  /> : false}
                </Row>
            </Container>

            {/* back to portfolio */}
            {/* <Container className="pt-5 px-0 text-center">
                <Link role="button" to={"/portfolio"} className={ styles.backBtn }>View All Projects</Link>
            </Container> */}

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