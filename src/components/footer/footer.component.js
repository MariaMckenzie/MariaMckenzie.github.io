import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Image, Row } from "react-bootstrap";
import githubIcon from "../../assets/icons/github.svg";
import linkedinIcon from "../../assets/icons/linkedin.svg";
import emailIcon from "../../assets/icons/email.svg";
import locationIcon from "../../assets/icons/location.svg";
import fulllogo from "../../assets/images/full_logo.png";
import styles from "./footer.module.css";

function FooterComponent() {
    return (
        <Row className="m-0 p-5">
            <Col className="align-self-center">
                <Image src={fulllogo} alt="Logo" fluid className={ styles.logo } />
            </Col>
            <Col className="text-center align-self-center">
                <p className={ styles.text }> Location</p>
                <Container className="pb-4 d-block justify-content-center">
                    <p className={ styles.text2 }>Kingston, Jamaica</p>
                </Container>
                <p className={ styles.text }> Contact Me</p>
                <Container className="d-flex justify-content-center">
                    <Image src={githubIcon} alt="Github Icon" fluid className={ styles.icons } />
                    <Image src={linkedinIcon} alt="LinkedIn Icon" fluid className={ styles.icons } />
                    <Image src={emailIcon} alt="Email Icon" fluid className={ styles.icons } />
                </Container>
            </Col>
            <Col className="align-self-center">
                <Container className="d-flex flex-column text-end ">
                    <Link to="/" className={ styles.link }>Home</Link>
                    <Link to="/portfolio" className={ styles.link }>Portfolio</Link>
                    <Link to="/resume" className={ styles.link }>Resume</Link>
                    {/* <Link to="/certificate" className={ styles.link }>Certificates</Link> */}
                </Container>
            </Col>
        </Row>
    )
}

export default FooterComponent