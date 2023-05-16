import React from "react";
import { Container } from "react-bootstrap";
import ProjectTabsComponent from "../../components/project-tabs/ProjectTabs.component"
import ProjectListComponent from "../../components/project-list/ProjectList.component";
import styles from "./Portfolio.module.css";

const portfolioPage = () => {
    return (
        <>
            <Container className="mx-5  my-3 p-0">
                <h4 className={styles.heading}>Projects</h4>
                <ProjectTabsComponent/>
            </Container>
            <Container className="m-5 p-0">
                <ProjectListComponent />
            </Container>
        </>
    )
}

export default portfolioPage; 