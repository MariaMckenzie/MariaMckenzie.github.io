import React from "react";
import { Container, Image, Row } from "react-bootstrap";
import img from "../../assets/images/under_construction.svg"
import NavComponent from "../../components/nav/Nav.component";
import FooterComponent from "../../components/footer/footer.component";
import CertificatesComponent from "../../components/certficates/certificates.component";
import styles from "./Certificates.module.css";

function CertificatesPage () { 
    return (
        <Container className="p-4">
            {/* navigation bar */}
            <Container>
                <Row className="py-2">
                    <NavComponent />
                </Row>
            </Container>

            <Row className="py-2">
                <h3 className={ styles.heading }>Certificates</h3>
            </Row>

            <Row className="py-2">
                <CertificatesComponent />
            </Row>

            {/* footer */}
            <Container className={ styles.container }>
                <Row className="mt-5">
					<FooterComponent />
				</Row>
            </Container>
		</Container>
    )
}

export default CertificatesPage; 