import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import data from "../../assets/data/about.data.json";
import img from "../../assets/images/pic3.png";
import githubIcon from "../../assets/icons/github.svg";
import linkedinIcon from "../../assets/icons/linkedin.svg";
import emailIcon from "../../assets/icons/email.svg";
import styles from "./intro.module.css";

function IntroComponent() {
    return (
        <Container className={ [styles.row, "m-0 align-items-center container-fluid"].join(" ") }>

            <Row className="p-0">
                <Col lg={4}>
                    <Image src={img} alt="profile image" fluid className={styles.img} />
                </Col>
                <Col lg={8} className="p-0">
                    {/* texrt */}
                    <p className={ styles.heading }>Hello I'm { data.name.split(" ")[0] }</p>
                    <p className={ styles.heading3 }> iTest. iDesign. iDevelop. </p>

                    {/* icons */}
                    <Container className={ [styles.iconGroup, "py-3 d-flex px-0"].join(" ") }>
                        <a href={ data.github } target="_blank" rel="noopener noreferrer">
                            <Image src={ githubIcon } alt="Github Icon" fluid className={ styles.icons } />
                        </a>
                        <a href={ data.linkedin } target="_blank" rel="noopener noreferrer">
                            <Image src={ linkedinIcon } alt="LinkedIn Icon" fluid className={ styles.icons } />
                        </a>
                        <a href={ data.email } target="_blank" rel="noopener noreferrer">
                            <Image src={ emailIcon } alt="Email Icon" fluid className={ styles.icons } />
                        </a>
                    </Container>

                    {/* buttons */}
                    <Container className={ [styles.btnGroup, "py-3 d-flex px-0"].join(" ") }>
                        <Link to="/portfolio" className={ styles.btn1 }>View Portfolio</Link>
                        <Link to="/resume" className={ styles.btn2 }>View Resume</Link>
                    </Container>
                </Col>
            </Row>

        </Container>

    )
}

export default IntroComponent