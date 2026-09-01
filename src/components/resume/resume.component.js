import { Card, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import CertificatesSection from "./sections/certificates.section";
import ExperienceSection from "./sections/experience.section";
import EducationSection from "./sections/education.section";
import InterestsSection from "./sections/interests.section";
import IntroSection from "./sections/intro.section";
import SkillsSection from "./sections/skills.section";
import SoftwareSection from "./sections/software.section";
import SummarySection from "./sections/summary.section";
import data from "../../assets/data/resume.data.json";
import styles from "./resume.module.css";

function ResumeComponent() {
    return (
        <Container className={[styles.container, "m-0"].join(" ")}>

            {/* introduction */}
            <Row className="pb-4">
                <IntroSection />
            </Row>

            {/* professional summary */}
            <Row className="pb-4">
                <SummarySection />
            </Row>

            {/* work experience */}
            <Row className="pb-4">
                <ExperienceSection />
            </Row>

            {/* education */}
            <Row className="pb-4">
                <EducationSection />
            </Row>

            {/* certificates */}
            <Row className="pb-4">
                <CertificatesSection />
            </Row>

            {/* skills */}
            <Row className="pb-4">
                <SkillsSection />
            </Row>

            {/* software */}
            <Row className="pb-4">
                <SoftwareSection />
            </Row>

            {/* interests */}
            <Row className="pb-4">
                <InterestsSection />
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

export default ResumeComponent