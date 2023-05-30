import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import data from "../../assets/data/dev-projects.data.json";
import img from "../../assets/images/temp.png";
import styles from "./projectList.module.css";

function DevProjectListComponent() {
    const fakeText = "Lorem ipsum dolor sit amet. Vel ipsa quis ea voluptas aliquam est explicabo maiores vel voluptate explicabo est velit odio At qui neque illum. Qui doloremque dolor ad tenetur eveniet sed facere galisum?";
    const fakeTitle = "Lorem ipsum dolor sit amet";
    return (
        <Container className="m-o p-3">
            <h5 className={ styles.heading }>Frontend Development</h5>
            <Row className="row-cols-auto text-start">
                {/* add cards from json file */
                    Array.from({ length: 3 }).map((_, id) => (
                        <Col className="mx-auto">
                            <Card className={ styles.card }>
                                <Container className={ styles.cardDecor }></Container>
                                <Card.Img src={img} alt="LinkedIn Icon" fluid className={ styles.img }/>
                                <Card.Title className={ styles.title }> { fakeTitle } </Card.Title>
                                <Card.Text className={ styles.text }> { fakeText } </Card.Text>
                                <Button href={`/projects/development/${id+1}`} className={ styles.btn }>View Details</Button>
                            </Card>
                        </Col>
                    ))
                }
            </Row>
        </Container>
    )
}

export default DevProjectListComponent;