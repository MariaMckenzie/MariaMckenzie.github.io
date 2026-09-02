import React from "react";
import { Container } from "react-bootstrap";
import data from "../../../assets/data/resume.data.json";
import styles from "../resume.module.css";

function SummarySection() {
    return (
        <Container className="m-0">
            <h6 className={styles.heading}>{data.summary.title}</h6>
            <p className={styles.text}>{data.summary.info}
            </p>
        </Container>
    )
}

export default SummarySection