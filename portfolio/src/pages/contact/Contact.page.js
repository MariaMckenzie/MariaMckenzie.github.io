import React from "react";
import { Col, Container, Form, FloatingLabel, Image, Row, Button} from "react-bootstrap";
import image from "../../assets/images/send_message.svg";
import emailIcon from "../../assets/icons/email_2.svg";
import locationIcon from "../../assets/icons/location.svg";
import styles from "./Contact.module.css";

const contactPage = () => {
    return (
        <>
            <Container className={ [styles.container, ""].join(" ") }>
                <Row className="gx-5 m-0 p-0">
                    <Col className={styles.col1}>
                        <Image src={image} className={styles.image} alt="logo" />  
                        <Container>
                            <Container className="d-flex mt-4 px-0">
                                <Image src={locationIcon} className={styles.icon} alt="logo" />  
                                <p className={styles.text}>Kingston, Jamaica</p>
                            </Container>
                            <Container className="d-flex my-3 px-0">
                                <Image src={emailIcon} className={styles.icon} alt="logo" />  
                                <p className={styles.text}>mariquielmckenzie@outlook.com</p>
                            </Container>
                        </Container>
                    </Col> 
                    <Col lg={7} className={styles.col2}>
                        <Container>
                            <h4 className={styles.heading}>Get in Touch</h4>
                            <h6 className={styles.subheading}>Send a message today!</h6>
                        </Container>
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <FloatingLabel controlId="floatingName" label="Name">
                                    <Form.Control type="text" placeholder="Name" />
                                </FloatingLabel>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <FloatingLabel controlId="floatingEmail" label="Email Address" >
                                    <Form.Control type="email" placeholder="Email Address" />
                                </FloatingLabel>
                            </Form.Group>
                            <Form.Group className="mb-3 p-0" controlId="textcontrol">
                                <FloatingLabel controlId="floatingMessage" label="Message">
                                    <Form.Control as="textarea" rows={3} placeholder="Message" />
                                </FloatingLabel>
                            </Form.Group>
                            <Form.Group className="p-0 d-grid">
                                <Button className={styles.btn}>Send Message</Button>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>      
            </Container>
        </>
    )
}

export default contactPage; 