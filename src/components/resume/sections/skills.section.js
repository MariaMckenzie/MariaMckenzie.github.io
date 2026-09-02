import React from "react";
import { Container, Row } from "react-bootstrap";
import data from "../../../assets/data/resume.data.json";
import styles from "../resume.module.css";

function SkillsSection() {
    return (
        <Container className="m-0">
            <h6 className={styles.text}>{data.skills.title}</h6>
            <Container className={styles.cardDecor}></Container>

            <Row className="text-start">
                {/* add information from json file */
                    Array.from({ length: data.skills.info.length }).map((_, id) => (
                        <Row key={`edu-${id}`} className="me-auto">
                            <p className={styles.text}>
                                <span>{data.skills.info[id].category}: {data.skills.info[id].items.join(", ")}.</span>
                            </p>
                        </Row>
                    ))
                }
            </Row>

        </Container>
    )
}

export default SkillsSection