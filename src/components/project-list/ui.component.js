import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import data from "../../assets/data/ui-projects.data.json";
import styles from "./projectList.module.css";

function UIProjectListComponent() {
    return (
        <Container className="m-o p-3">
            <h5 className={ styles.heading }>UI/UX Designs</h5>
            <Row className="row-cols-auto text-start">
                {/* add cards from json file */
                    Array.from({ length: 3 }).map((_, id) => (
                        <Col key={`ui-${id}`} className="mx-auto">
                            <Card className={ styles.card }>
                                <Container className={ styles.cardDecor }></Container>
                                <Card.Img src={ require(`../../assets/images/projects/${data[id].cover[0]}`) }alt="UIUX Design Cover Image" fluid className={ styles.img }/>
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