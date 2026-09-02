import React from "react";
import { Container, Row } from "react-bootstrap";
import data from "../../../assets/data/resume.data.json";
import styles from "../resume.module.css";

function certificatessSection() {
    return (
        <Container className="m-0">
            <h6 className={styles.text}>{data.certificates.title}</h6>
            <Container className={styles.cardDecor}></Container>

            <Row className="text-start">
                {/* add information from json file */
                    Array.from({ length: data.certificates.info.length }).map((_, id) => (
                        <Row key={`edu-${id}`} className="me-auto">
                            <p className={styles.text}>
                                <span>{data.certificates.info[id].name}</span>
                                <span className="px-2">|</span>
                                <span>{data.certificates.info[id].institution}</span>
                                <span className="px-2">|</span>
                                <span>{data.certificates.info[id].year}</span>
                            </p>
                        </Row>
                    ))
                }
            </Row>

        </Container>
    )
}

export default certificatessSection