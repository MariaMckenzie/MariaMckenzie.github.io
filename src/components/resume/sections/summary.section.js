import { Card, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import data from "../../../assets/data/resume.data.json";
import styles from "../resume.module.css";

function SummarySection() {
    return (
        <Container className="m-0">
            <h6 className={styles.heading}>{data.summary.title}</h6>
            <p className={styles.text}>{data.summary.text}
            </p>
        </Container>
    )
}

export default SummarySection