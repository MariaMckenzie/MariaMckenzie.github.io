import React from "react";
import data from "../../assets/data/intro.data.json";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import img from "../../assets/images/pic1.png";
import githubIcon from "../../assets/icons/github.svg";
import linkedinIcon from "../../assets/icons/linkedin.svg";
import styles from "./intro.module.css";

function IntroComponent() {
    return (
        <Row className="m-0 p-5 align-items-center">
            <Col lg={7} className="p-0">
                <h4 className={ styles.heading }>Hello I'm { data.name.split(" ")[0] }</h4>
                <h2 className={ styles.subheading }>{ data.about }</h2>

                <Container className="py-3 d-flex px-0">
                    <Image src={githubIcon} alt="Github Icon" fluid className={ styles.icons } />
                    <Image src={linkedinIcon} alt="LinkedIn Icon" fluid className={ styles.icons } />
                </Container>

                <Button className={ styles.btn1 }>View Portfolio</Button>
                <Button className={ styles.btn2 }>View Resume</Button>
            </Col>
            <Col className="text-center p-0">
                <Image src={img} alt="profile image" fluid className={styles.img} />
            </Col>
        </Row>
    )
}

export default IntroComponent