import React from "react"; 
import { Row, Col } from "react-bootstrap";
import ProjectCardComponent from "../project-card/ProjectCard.component";
// import styles from "./ProjectList.module.css";

const projectListComponent = () => {
    return (
        <>
            <Row className="row-cols-auto g-2 m-0 p-0">
                    {
                        Array.from({ length: 5 }).map((_, id) => (
                            <Col>
                                <ProjectCardComponent key={`project${id}`} />
                            </Col>
                        ))
                    }
            </Row>
        </>
    )
}

export default projectListComponent;