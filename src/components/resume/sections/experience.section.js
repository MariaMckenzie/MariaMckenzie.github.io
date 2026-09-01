import { Card, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import data from "../../../assets/data/resume.data.json";
import styles from "../resume.module.css";

function ExperienceSection() {
    return (
        <Container className={[styles.container, "m-0"].join(" ")}>
            {/* professional summary */}
            <Row className="pb-4">
                <h6 className={styles.text}>{data.section[1].name}</h6>
                <Container className={styles.cardDecor}></Container>
                <p className={styles.text}>{data.section[1].info}</p>
            </Row>

            {/* work experience */}
            <Row className="pb-4">
                <h6 className={styles.text}>{data.section[2].name}</h6>
                <Container className={styles.cardDecor}></Container>
                <p className={styles.text}>{data.section[2].info}</p>
            </Row>

            {/* education */}
            <Row className="pb-4">
                <h6 className={styles.text}>{data.section[1].name}</h6>
                <Container className={styles.cardDecor}></Container>
                <p className={styles.text}>{data.section[1].info}</p>
            </Row>

            {/* certificates */}
            <Row className="pb-4">
                <h6 className={styles.text}>{data.section[1].name}</h6>
                <Container className={styles.cardDecor}></Container>
                <p className={styles.text}>{data.section[1].info}</p>
            </Row>

            {/* skills */}
            <Row className="pb-4">
                <h6 className={styles.text}>{data.section[1].name}</h6>
                <Container className={styles.cardDecor}></Container>
                <p className={styles.text}>{data.section[1].info}</p>
            </Row>

            {/* software */}
            <Row className="pb-4">
                <h6 className={styles.text}>{data.section[1].name}</h6>
                <Container className={styles.cardDecor}></Container>
                <p className={styles.text}>{data.section[1].info}</p>
            </Row>

            {/* interests */}
            <Row className="pb-4">
                <h6 className={styles.text}>{data.section[1].name}</h6>
                <Container className={styles.cardDecor}></Container>
                <p className={styles.text}>{data.section[1].info}</p>
            </Row>



            <Row className="text-start">
                {/* add cards from json file */
                    Array.from({ length: data.section.length }).map((_, id) => (
                        <Row key={`resume-${id}`} className="me-auto">
                            <Card className={styles.card}>
                                <Card.Title className={styles.title}> {data.section[id].name} </Card.Title>
                                <Container className={styles.cardDecor}></Container>
                                <Card.Text className={styles.text}><ul className={styles.text}>
                                    {data.section[id].info.map((bullet, idx) => (
                                        <li key={idx}>{bullet}</li>
                                    ))}
                                </ul> </Card.Text>
                            </Card>
                        </Row>
                    ))
                }
            </Row>

            <Row>
                <Link role="button" to="/portfolio" className={styles.btn}>View Projects</Link>
            </Row>
        </Container>
    )
}

export default ExperienceSection