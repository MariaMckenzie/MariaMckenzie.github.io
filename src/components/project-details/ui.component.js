import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import  arrowLeft from "../../assets/icons/arrow_left.svg";
import  arrowRight from "../../assets/icons/arrow_right.svg";
import data from "../../assets/data/ui-projects.data.json";
import { useParams } from 'react-router-dom';
import styles from "./projectDetails.module.css";

function UIProjectDetailsComponent ( ) {
    const { id } = useParams();
    const project = data[id-1];

    return (
        <Container className="m-0 p-0">
            <Container>
                <Row>
                    <Col className="text-start py-5 px-0 m-0">
                        { id === "1" ? true : <Link role="button" to={`/projects/uiux/${Number(id)-1}`} className={ styles.btn }>
                            <Image src={ arrowLeft } alt="Left Arrow" fluid className={ styles.icons } /> View Previous Project
                            </Link> 
                        }
                    </Col>
                    <Col className="text-end py-5 px-0 m-0">
                        { id === "3" ? true : <Link role="button" to={`/projects/uiux/${Number(id)+1}`} className={ styles.btn }>
                            View Next Project<Image src={ arrowRight } alt="Right Arrow" fluid className={ styles.icons } /> 
                            </Link> 
                        }
                    </Col>
                </Row>
            </Container>

            <Container>
                {/* Project Information */}
                <h3 className={ [styles.heading, "pb-4"].join(" ") }> {project.title} </h3>

                <h5 className={ styles.subheading }>Description</h5>
                <p className={ styles.info }> {project.description} </p>

                <h5 className={ styles.subheading }>Problem Statement</h5>
                <p className={ styles.info }> {project["problem-statement"]} </p>

                <h5 className={ styles.subheading }>Goals</h5>
                <p className={ styles.info }> 
                    {/* list goals of the project */
                        project.goals.map((goal) => (
                            <li>{ goal }</li>
                        ))
                    }
                </p>

                <h5 className={ styles.subheading }>Business Challenges</h5>
                <p className={ styles.info }> 
                    {/* list business challenges of the project */
                        project["business-challenges"].map((challenge) => (
                            <li>{ challenge }</li>
                        ))
                    }
                </p>

                <h5 className={ styles.subheading }>User Challenges</h5>
                <p className={ styles.info }> 
                    {/* list user challenges of the project */
                        project["user-challenges"].map((challenge) => (
                            <li>{ challenge }</li>
                        ))
                    }
                </p>

                <h5 className={ styles.subheading }>Product Users</h5>
                <p className={ styles.info }> 
                    {/* list users of the project */
                        project["product-users"].map((user) => (
                            <li>{ user }</li>
                        ))
                    }
                </p>

                <h5 className={ styles.subheading }>Research</h5>
                <p className={ styles.info }> {project.research} </p>

                <h5 className={ styles.subheading }>Competitor Analysis</h5>
                <p className={ styles.info }> {project["competitor-analysis"]} </p>

                <h5 className={ styles.subheading }>Features</h5>
                <p className={ styles.info }> {project.features} </p>

                <h5 className={ styles.subheading }>User Persona</h5>
                <p className={ styles.info }> {project["user-persona"]} </p>

                <h5 className={ styles.subheading }>Task Flow</h5>
                <p className={ styles.info }> {project["task-flow"]} </p>

                <h5 className={ styles.subheading }>Sketches</h5>
                <p className={ styles.info }> {project.sketches} </p>

                <h5 className={ styles.subheading }>Major Screens</h5>
                <p className={ styles.info }> {project["major-screens"]} </p>

                <h5 className={ styles.subheading }>Other Screens</h5>
                <p className={ styles.info }> {project["other-screens"]} </p>

            </Container>
            
            <Container className="pt-4 px-0">
                <Link role="button" to={"/projects"} className={ styles.backBtn }>View all projects</Link>
            </Container>
        </Container>
    )
}

export default UIProjectDetailsComponent;