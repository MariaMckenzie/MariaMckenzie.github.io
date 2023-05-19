import React from "react";
import data from "../../assets/data/intro.data.json";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import img from "../../assets/images/pic1.png";
import styles from "./intro.module.css";

function IntroComponent() {
    return (
        <Container className="p-5">
            <Row>
                <Col lg={7}>
                    <h4 className={ styles.heading }>Hello I'm { data.name.split(" ")[0] }</h4>
                    <h3 className={ styles.subheading }>{ data.about }</h3>
                    <Button className={ styles.btn1 }>View Projects</Button>
                    <Button className={ styles.btn2 }>Contact Me</Button>
                </Col>
                <Col className="text-center">
                    <Image src={img} alt="profile image" fluid className={styles.img} />
                </Col>
            </Row>
        </Container>
    )
}

export default IntroComponent