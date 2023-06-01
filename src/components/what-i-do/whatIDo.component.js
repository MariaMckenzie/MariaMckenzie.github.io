import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import data from "../../assets/data/intro.data.json";
import styles from "./whatIDo.module.css";

function WhatIDoComponent() {
    return (
        <Container className={ [styles.container, "m-0"].join(" ") }>
            <h3 className={ styles.heading }>What I Do</h3>
            <Row className="row-cols-auto text-start">
                {/* add cards from json file */
                    Array.from({ length: data.role.length }).map((_, id) => (
                        <Col key={`whatIDo-${id}`} className="me-auto">
                            <Card className={ styles.card }>
                                <Container className={ styles.cardDecor }></Container>
                                <Card.Title className={ styles.title }> { data.role[id].name } </Card.Title>
                                <Card.Text className={ styles.text }> { data.role[id].info } </Card.Text>
                                <Link to="/portfolio" className={ styles.link }>
                                    <Button className={ styles.btn }>View Projects</Button>
                                </Link>
                            </Card>
                        </Col>
                    ))
                }
            </Row>
        </Container>
    )
}

export default WhatIDoComponent