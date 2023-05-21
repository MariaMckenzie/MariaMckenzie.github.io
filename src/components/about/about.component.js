import React from "react";
import data from "../../assets/data/about.data.json";
import { Container } from "react-bootstrap";
import styles from "./styles.module.css";

function AboutComponent() {
    return (
        <Container className="p-5 text-center">
            <h4 className={ styles.heading }>About Me</h4>
            {/* add text from json file */}
            <p className={ styles.text }>
                {data.about}
            </p>
        </Container>
    )
}

export default AboutComponent