import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import data from "../../assets/data/ui-projects.data.json";
import img from "../../assets/images/temp.png";
import styles from "./projectList.module.css";

function UIProjectListComponent() {
    const fakeText = "Lorem ipsum dolor sit amet. Vel ipsa quis ea voluptas aliquam est explicabo maiores vel voluptate explicabo est velit odio At qui neque illum. Qui doloremque dolor ad tenetur eveniet sed facere galisum?";
    const fakeTitle = "Lorem ipsum dolor sit amet";
    return (
        <Container className="m-o p-3">
            <h5 className={ styles.heading }>UI/UX Designs</h5>
            <Row className="row-cols-auto text-start">
                {/* add cards from json file */
                    Array.from({ length: 3 }).map((_, id) => (
                        <Col key={`ui-${id}`} className="mx-auto">
                            <Card className={ styles.card }>
                                <Container className={ styles.cardDecor }></Container>
                                <Card.Img src={ require(`../../assets/images/projects/ui/${data[id].cover}`) }alt="UIUX Design Cover Image" fluid className={ styles.img }/>
                                <Card.Title className={ styles.title }> { data[id].title } </Card.Title>
                                <Card.Text className={ styles.text }> { data[id].description } </Card.Text>
                                <Link role="button" to={`/projects/uiux/${id+1}`} className={ styles.btn }>View Details</Link>
                            </Card>
                        </Col>
                    ))
                }
            </Row>
        </Container>
    )
}

export default UIProjectListComponent;