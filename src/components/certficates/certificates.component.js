import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import data from "../../assets/data/certificates.data.json";
import styles from "./certificates.module.css";

function CertificatesComponent() {
    // find the number of items in the json file
    let len = data.length

    return (
        <Container className={ [styles.container, "m-0"].join(" ") }>
            <h3 className={ styles.heading }>Certificates</h3>
            <Row className="row-cols-auto text-start">
                {/* add cards from json file */
                    Array.from({ length: len }).map((_, id) => (
                        <Col key={`cert-${id}`} className="mx-auto">
                            <Card className={ [styles.card, "p-3"].join(" ")}>
                                <Container className={ styles.cardDecor }></Container>
                                <Card.Title className={ styles.title }> { data[id].title } </Card.Title>
                                <Card.Text className={ styles.text }> { data[id].organisation } </Card.Text>
                                <Card.Text className={ styles.text }> - { data[id].date } </Card.Text>
                            </Card>
                        </Col>
                    ))
                }
            </Row>
        </Container>
    )
}

export default CertificatesComponent;