import React from "react";
import { useParams } from 'react-router-dom';
import { Container, Row } from "react-bootstrap";
import NavComponent from "../../components/nav/nav.component";
import FooterComponent from "../../components/footer/footer.component";
import styles from "./Project.module.css";

function ProjectPage () {
    const { type, id } = useParams();
    return (
        <Container className="p-4">
            {/* navigation bar */}
            <Container>
                <Row className="py-2">
                    <NavComponent />
                </Row>
            </Container>

            {/* projects section */}
            <h3 className={ styles.heading }>{console.log(id)}</h3>

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