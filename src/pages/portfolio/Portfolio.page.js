import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import data from "../../assets/data/about.data.json";
import qa from "../../assets/data/qa-projects.data.json";
import ui from "../../assets/data/ui-projects.data.json";
import dev from "../../assets/data/dev-projects.data.json";
import img from "../../assets/images/temp.png";
import NavComponent from "../../components/nav/nav.component";
import FooterComponent from "../../components/footer/footer.component";
import styles from "./Portfolio.module.css";

function PortfolioPage () {
    const fakeText = "Lorem ipsum dolor sit amet. Vel ipsa quis ea voluptas aliquam est explicabo maiores vel voluptate explicabo est velit odio At qui neque illum. Qui doloremque dolor ad tenetur eveniet sed facere galisum? Sit nemo doloribus eos distinctio dolorem 33 sapiente officiis qui tempora consequuntur aut sunt ratione et optio velit. Aut possimus eius et atione excepturi.";
    const fakeTitle = "Lorem ipsum dolor sit amet";
    
    return (
        <Container className="p-4">
            {/* navigation bar */}
            <Container>
                <Row className="py-2">
                    <NavComponent />
                </Row>
            </Container>

            {/* projects section */}
            <Row className="py-2">
                <h3 className={ styles.heading }>Portfolio</h3>

                {/* ui ux projects */}
                <Container>
                    {/* heading */}
                    <h6 className={ styles.subheading}>{ data.projects[0] }</h6>

                    {/* add project info from json file */
                        Array.from({ length: ui.length }).map((_, id) => (
                            <Row className="pt-3 mx-3">
                                <Container>
                                    <Row className={ styles.card }>
                                        <Col lg={3} className="align-self-center">
                                            <Image src={img} alt="LinkedIn Icon" fluid className={ styles.img } />
                                        </Col>
                                        <Col className="align-self-center">
                                            <h6 className={ styles.title }>{ fakeTitle }</h6>
                                            <p className={ styles.text }>{ fakeText }</p>
                                            <Button className={ styles.btn }>View Details</Button>
                                        </Col>
                                    </Row>
                                </Container>
                            </Row>
                        ))
                    }
                </Container>
                
                {/* frontend dev projects */}
                <Container>
                    {/* heading */}
                    <h6 className={ styles.subheading}>{ data.projects[1] }</h6>

                    {/* add project info from json file */
                        Array.from({ length: ui.length }).map((_, id) => (
                            <Row className="pt-3 mx-3">
                                <Container>
                                    <Row className={ styles.card }>
                                        <Col lg={3} className="align-self-center">
                                            <Image src={img} alt="LinkedIn Icon" fluid className={ styles.img } />
                                        </Col>
                                        <Col className="align-self-center">
                                            <h6 className={ styles.title }>{ fakeTitle }</h6>
                                            <p className={ styles.text }>{ fakeText }</p>
                                            <Button className={ styles.btn }>View Details</Button>
                                        </Col>
                                    </Row>
                                </Container>
                            </Row>
                        ))
                    }
                </Container>

                {/* automation projects */}
                <Container>
                    {/* heading */}
                    <h6 className={ styles.subheading}>{ data.projects[2] }</h6>

                    {/* add project info from json file */
                        Array.from({ length: ui.length }).map((_, id) => (
                            <Row className="pt-3 mx-3">
                                <Container>
                                    <Row className={ styles.card }>
                                        <Col lg={3} className="align-self-center">
                                            <Image src={img} alt="LinkedIn Icon" fluid className={ styles.img } />
                                        </Col>
                                        <Col className="align-self-center">
                                            <h6 className={ styles.title }>{ fakeTitle }</h6>
                                            <p className={ styles.text }>{ fakeText }</p>
                                            <Button className={ styles.btn }>View Details</Button>
                                        </Col>
                                    </Row>
                                </Container>
                            </Row>
                        ))
                    }
                </Container>
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

export default PortfolioPage; 