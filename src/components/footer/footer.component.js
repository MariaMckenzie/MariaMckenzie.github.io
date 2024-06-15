import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Image, Row } from "react-bootstrap";
import githubIcon from "../../assets/icons/github.svg";
import linkedinIcon from "../../assets/icons/linkedin.svg";
import emailIcon from "../../assets/icons/email.svg";
import fulllogo from "../../assets/images/full_logo.png";
import data from "../../assets/data/about.data.json";
import styles from "./footer.module.css";

function FooterComponent () {
    return (
        <Container>
            {/* visible on larger screens only */}
            <Container className="m-0 p-5 d-none d-lg-block">
                <Row>
                    {/* Container for image */}
                    <Col className="align-self-center">
                        <Image src={fulllogo} alt="Logo" fluid className={ styles.logo } />
                    </Col>

                    <Col className="text-center align-self-center">
                        {/* Container for location information */}
                        <Container className="pb-4 d-block justify-content-center">
                            <p className={ styles.heading }>Location</p>
                            <p className={ styles.text }>Kingston, Jamaica</p>
                        </Container>

                        {/* Container for contact information */}
                        <p className={ styles.heading }>Contact Me</p>
                        <Container className="d-flex justify-content-center">
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
                    </Col>

                    <Col className="align-self-center">
                        {/* Container for navigation links */}
                        <Container className="d-flex flex-column text-end ">
                            <p className={ styles.heading }>Important Links</p>
                            <Link to="/" className={ [styles.link, styles.text].join(" ") }>
                                Home
                            </Link>
                            <Link to="/portfolio" className={ [styles.link, styles.text].join(" ") }>
                                Portfolio
                            </Link>
                            <Link to="/resume" className={ [styles.link, styles.text].join(" ") }>
                                Resume
                            </Link>
                            {/* <Link to="/certificate" className={ [styles.link, styles.text2].join(" ") }>
                                Certificates
                            </Link> */}
                        </Container>
                    </Col>
                </Row>
            </Container>
            
            {/* visible on medium to small screens only */}
            <Row className="m-0 p-5 text-center justify-content-center d-block d-md-block d-lg-none">
                {/* Container for image */}
                <Container className="mb-4">
                    <Image src={fulllogo} alt="Logo" fluid className={ styles.logo } />
                </Container>

                {/* Container for location information */}
                <Container className="d-block my-5">
                    <p className={ styles.heading }>Location</p>
                    <p className={ styles.text }>Kingston, Jamaica</p>
                </Container>

                {/* Container for contact information */}
                <Container className="my-5">
                    <p className={ styles.heading }>Contact Me</p>
                    <Container className="d-flex justify-content-center">
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
                </Container>
                    
                {/* Container for navigation links */}
                <Container className="d-flex flex-column mb-2">
                    <p className={ styles.heading }>Important Links</p>
                    <Link to="/" className={ [styles.link, styles.text].join(" ") }>
                        Home
                    </Link>
                    <Link to="/portfolio" className={ [styles.link, styles.text].join(" ") }>
                        Portfolio
                    </Link>
                    <Link to="/resume" className={ [styles.link, styles.text].join(" ") }>
                        Resume
                    </Link>
                    {/* <Link to="/certificate" className={ [styles.link, styles.text2].join(" ") }>
                        Certificates
                    </Link> */}
                </Container>
            </Row>
        </Container>
        
    )
}

export default FooterComponent