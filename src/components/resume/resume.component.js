import React from "react";
import { Container, Row } from "react-bootstrap";
import CertificatesSection from "./sections/certificates.section";
import ExperienceSection from "./sections/experience.section";
import EducationSection from "./sections/education.section";
import InterestsSection from "./sections/interests.section";
import IntroSection from "./sections/intro.section";
import SkillsSection from "./sections/skills.section";
import SoftwareSection from "./sections/software.section";
import SummarySection from "./sections/summary.section";
import styles from "./resume.module.css";



function ResumeComponent() {
    return (
        <Container className={[styles.container, "m-0 p-4"].join(" ")}>

            {/* introduction */}
            <Row className="pb-1">
                <IntroSection />
            </Row>

            {/* professional summary */}
            <Row className="pb-1">
                <SummarySection />
            </Row>

            {/* work experience */}
            <Row className="pb-1">
                <ExperienceSection />
            </Row>

            {/* education */}
            <Row className="pb-1">
                <EducationSection />
            </Row>

            {/* certificates */}
            <Row className="pb-1">
                <CertificatesSection />
            </Row>

            {/* skills */}
            <Row className="pb-1">
                <SkillsSection />
            </Row>

            {/* software  */}
            <Row className="pb-1">
                <SoftwareSection />
            </Row>

            {/* interests */}
            <Row className="pb-0">
                <InterestsSection />
            </Row>

        </Container>
    )
}

export default ResumeComponent