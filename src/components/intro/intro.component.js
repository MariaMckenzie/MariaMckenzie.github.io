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
        <Row className={ [styles.row, "m-0 align-items-center container-fluid"].join(" ") }>   
            {/* show for smaller screens */}
            <Col className="d-lg-none d-xxl-block p-0">
                <Image src={img} alt="profile image" fluid className={styles.img} />
            </Col>

            <Col lg={8} className="p-0">
                <p className={ styles.heading }>Hello I'm { data.name.split(" ")[0] }</p>
                <p className={ styles.heading3 }> iTest. iDesign. iDevelop. </p>

                {/* show for smaller screens */}
                <Container className="py-3 d-flex px-0 justify-content-center d-lg-none d-xxl-block pb-4">
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
                <Container className="pt-1 d-flex flex-column px-0 justify-content-center d-lg-none d-xxl-block pb-4">
                    <Link to="/portfolio" className={ styles.btn1 }>View Portfolio</Link>
                    <Link to="/resume" className={ styles.btn2 }>View Resume</Link>
                </Container>

                {/* show for larger screens */}
                <Container className="py-3 d-flex px-0 d-none d-lg-block d-xxl-none">
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
                <Container className="py-3 d-flex px-0 d-none d-lg-block d-xxl-none">
                    <Link to="/portfolio" className={ styles.btn1 }>View Portfolio</Link>
                    <Link to="/resume" className={ styles.btn2 }>View Resume</Link>
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