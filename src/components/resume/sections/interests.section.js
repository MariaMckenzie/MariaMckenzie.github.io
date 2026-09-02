import React from "react";
import { Container, Row } from "react-bootstrap";
import data from "../../../assets/data/resume.data.json";
import styles from "../resume.module.css";

function InterestsSection() {
    return (
        <Container className="m-0">
            <h6 className={styles.text}>{data.interests.title}</h6>
            <Container className={styles.cardDecor}></Container>

            <Row className="text-start">
                {/* add information from json file */
                    Array.from({ length: data.software.info.length }).map((_, id) => (
                        <Row key={`item-${id}`} className="me-auto">
                            <p className={styles.text}> {data.interests.info.join(", ")}
                            </p>
                        </Row>
                    ))
                }
            </Row>

        </Container>
    )
}

export default InterestsSection