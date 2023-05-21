import React from "react";
import data from "../../assets/data/intro.data.json";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import styles from "./styles.module.css";

function WhatIDoComponent() {
    return (
        <Container className="p-5 my-4 text-center">
            <h4 className={ styles.heading }>What I Do</h4>
            <Row className="row-cols-auto text-center justify-content-center">
                {/* add cards from json file */}
                    {
                        Array.from({ length: data.role.length }).map((_, id) => (
                            <Col>
                                <Card className={ styles.card }>
                                    <Card.Title className={ styles.title }> { data.role[id].name } </Card.Title>
                                    <Card.Text className={ styles.text }> { data.role[id].info } </Card.Text>
                                    <Button className={ styles.btn }>View  Projects</Button>
                                </Card>
                            </Col>
                        ))
                    }
            </Row>
        </Container>
    )
}

export default WhatIDoComponent