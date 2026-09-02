import React from "react";
import { Container, Row } from "react-bootstrap";
import data from "../../../assets/data/resume.data.json";
import styles from "../resume.module.css";

function EducationSection() {
    return (
        <Container className="m-0">
            <h6 className={styles.text}>{data.education.title}</h6>
            <Container className={styles.cardDecor}></Container>

            <Row className="text-start">
                {/* add information from json file */
                    Array.from({ length: data.education.info.length }).map((_, id) => (
                        <Row key={`edu-${id}`} className="me-auto">
                            <p className={styles.text}>
                                <span>{data.education.info[id].degree}</span>
                                <span className="px-2">|</span>
                                <span>{data.education.info[id].institution}</span>
                                <span className="px-2">|</span>
                                <span>{data.education.info[id].year}</span>
                            </p>
                        </Row>
                    ))
                }
            </Row>

        </Container>
    )
}

export default EducationSection