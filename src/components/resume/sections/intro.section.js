import React from "react";
import { Container } from "react-bootstrap";
import data from "../../../assets/data/resume.data.json";
import styles from "../resume.module.css";

function IntroSection() {
    return (
        <Container className="m-0">
            <h5 className={styles.text}>{data.intro.name}</h5>
            <p className={styles.text}>
                <span>{data.intro.email}</span>
                <span className="px-2">|</span>
                <span>{data.intro.phone}</span>
                <span className="px-2">|</span>
                <span>{data.intro.location}</span>
                <span className="px-2">|</span>
                <span>{data.intro.linkedin}</span>
            </p>
        </Container>
    )
}

export default IntroSection