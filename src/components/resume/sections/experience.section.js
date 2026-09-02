import React from "react";
import { Container, Row } from "react-bootstrap";
import data from "../../../assets/data/resume.data.json";
import styles from "../resume.module.css";

function ExperienceSection() {
    return (
        <Container className="m-0">
            <h6 className={styles.text}>{data.experience.title}</h6>
            <Container className={styles.cardDecor}></Container>

            <Row className="text-start">
                {/* add information from json file */
                    Array.from({ length: data.experience.info.length }).map((_, id) => (
                        <Row key={`exp-${id}`} className="me-auto">
                            <p className={styles.text}>
                                <span>{data.experience.info[id].role}</span>
                                <span className="px-2">|</span>
                                <span>{data.experience.info[id].startDate} - {data.experience.info[id].endDate}</span>
                                <span className="px-2">|</span>
                                <span>{data.experience.info[id].company} ({data.experience.info[id].context})</span>
                                <span className="px-2">|</span>
                                <span>{data.experience.info[id].location}</span>
                            </p>
                            <Container></Container>
                            <p className={styles.text}>
                                <ul className={styles.text}>
                                    {data.experience.info[id].bullets.map((bullet, idx) => (
                                        <li key={idx}>{bullet}</li>
                                    ))}
                                </ul> </p>
                        </Row>
                    ))
                }
            </Row>
        </Container>
    )
}

export default ExperienceSection