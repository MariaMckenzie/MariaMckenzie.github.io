import React from "react";
import data from "../../assets/data/intro.data.json";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import img from "../../assets/images/pic1.png";
import githubIcon from "../../assets/icons/github.svg";
import linkedinIcon from "../../assets/icons/linkedin.svg";
import styles from "./intro.module.css";

function IntroComponent() {
    return (
        <Row className={ [styles.row, "m-0 align-items-center container-fluid"].join(" ") }>

            {/* show for smaller screens */}
            <Col className="d-lg-none d-xxl-block pb-4">
                <Image src={img} alt="profile image" fluid className={styles.img} />
            </Col>

            <Col lg={7} className="p-0">
                <h4 className={ styles.heading }>Hello I'm { data.name.split(" ")[0] }</h4>
                <h2 className={ styles.subheading }>{ data.about }</h2>

                {/* show for smaller screens */}
                <Container className="py-3 d-flex px-0 justify-content-center d-lg-none d-xxl-block pb-4">
                    <Image src={githubIcon} alt="Github Icon" fluid className={ styles.icons } />
                    <Image src={linkedinIcon} alt="LinkedIn Icon" fluid className={ styles.icons } />
                </Container>

                {/* buttons */}
                <Container className="pt-1 d-block px-0 justify-content-center d-lg-none d-xxl-block pb-4">
                    <Button href="/portfolio" className={ styles.btn1 }>View Portfolio</Button>
                    <Button href="/resume" className={ styles.btn2 }>View Resume</Button>
                </Container>

                {/* show for larger screens */}
                <Container className="py-3 d-flex px-0 d-none d-lg-block d-xxl-none">
                    <Image src={githubIcon} alt="Github Icon" fluid className={ styles.icons } />
                    <Image src={linkedinIcon} alt="LinkedIn Icon" fluid className={ styles.icons } />
                </Container>

                {/* buttons */}
                <Container className="py-3 d-flex px-0 d-none d-lg-block d-xxl-none">
                    <Button href="/portfolio" className={ styles.btn1 }>View Portfolio</Button>
                    <Button href="/resume" className={ styles.btn2 }>View Resume</Button>
                </Container>

            </Col>

            {/* show for larger screens */}
            <Col className="text-center p-0 d-none d-lg-block d-xxl-none">
                <Image src={img} alt="profile image" fluid className={styles.img} />
            </Col>
        </Row>
    )
}

export default IntroComponent