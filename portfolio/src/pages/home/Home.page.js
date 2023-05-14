import React from "react";
import { Container, Image, Row, Col } from "react-bootstrap";
import image1 from "../../assets/images/background1.png";
import image2 from "../../assets/images/profilePhoto.png";
import linkedinIcon from "../../assets/icons/linkedin.svg";
import emailIcon from "../../assets/icons/email.svg";
import githubIcon from "../../assets/icons/github.svg";
import Tabs from "../../components/tabs/Tabs.component";
import Skills from "../../components/tabs/Skills.component";
import styles from "./Home.module.css";

const homePage = () => {
    return (
        <>
            <Container className={[styles.backgroundContainer, "m-0 p-0"].join(" ")}>
                <Image src={image1} alt="background image" fluid className={styles.backgroundImage} />
            </Container>
            <Container className="mb-4">  
                <Row>
                    <Col lg={5} className={[styles.profileContainer, "p-4"].join(" ")}>
                        <Row className={styles.profileRow}>
                            <Col lg={4} className={styles.imgContainer}>
                                <Image src={image2} alt="profile image" fluid className={styles.profileImage} />
                            </Col>
                            <Col lg={8} className={styles.infoContainer}>
                                <h5 className={styles.infoContainerName} >Maria McKenzie</h5>
                                <p className={styles.infoContainerRole} >UI/UX Designer | Frontend Developer | QA</p>
                                <p className={styles.infoContainerLocation} >Kingston, Jamaica</p>
                            </Col>
                        </Row>
                        <Row className={styles.aboutRow}>
                            <h6>About Me</h6>
                            <p>
                                I am a software professional with experience in QA, development, and UI/UX design. My 
                                year-long experience in QA has provided me with a strong understanding of software 
                                testing best practices and the importance of quality assurance processes. I have 
                                completed developer projects, utilizing various programming languages and frameworks. 
                                Additionally, I have experience in UI/UX design, prioritizing user-centric interfaces for enhanced user 
                                satisfaction. Working in agile environments has honed my collaboration skills and 
                                adaptability to changing requirements. With technical proficiency, attention to detail, and 
                                effective communication, I am equipped to contribute to the successful development and delivery 
                                of software solutions.
                            </p>
                        </Row>
                        <Row className={styles.contactRow}>
                        <h6>Contact Me</h6>
                            <Container className="fluid d-flex">
                                <Image src={emailIcon} className={styles.icon} alt="logo" />
                                <Image src={linkedinIcon} className={styles.icon} alt="logo" />
                                <Image src={githubIcon} className={styles.icon} alt="logo" />
                            </Container>
                        </Row>
                    </Col>
                    <Col lg={7} className={["px-4 py-2"].join(" ")}>
                        <Row>
                            <Tabs />
                        </Row>
                        <Row className={styles.tabInfo} >
                            <Skills />
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default homePage; 