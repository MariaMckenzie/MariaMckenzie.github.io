import React from "react";
import { Container, Image, Row } from "react-bootstrap";
import img from "../../assets/images/under_construction.svg"
import NavComponent from "../../components/nav/Nav.component";
import FooterComponent from "../../components/footer/footer.component";
import styles from "./Resume.module.css";

function ResumePage () { 
    return (
        <Container className="p-4">
            {/* navigation bar */}
            <Container>
                <Row className="py-2">
                    <NavComponent />
                </Row>
            </Container>

            <Row className="py-2">
                <h3 className={ styles.heading }>Resume</h3>
            </Row>

            <Row className="py-2">
                <Image src={img} alt="Under contruction image" fluid className={ styles.img } /> 
                <h5 className={ styles.text }>Coming Soon</h5>
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

export default ResumePage; 