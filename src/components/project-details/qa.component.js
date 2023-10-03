import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import data from "../../assets/data/qa-projects.data.json";
import arrowLeft from "../../assets/icons/arrow_left.svg";
import arrowRight from "../../assets/icons/arrow_right.svg";
import { useParams } from 'react-router-dom';
import styles from "./projectDetails.module.css";

function QAProjectDetailsComponent () {
    const { id } = useParams();
    const project = data[id-1];

    return (
        <Container className="m-0 p-0">
            <Container>
                <Row>
                    <Col className="text-start py-5 px-0 m-0">
                        { id === "1" ? true : <Link role="button" to={`/projects/qa/${Number(id)-1}`} className={ styles.btn }>
                            <Image src={ arrowLeft } alt="Left Arrow" fluid className={ styles.icons } /> View Previous Project
                            </Link> 
                        }
                    </Col>
                    <Col className="text-end py-5 px-0 m-0">
                        { id === "3" ? true : <Link role="button" to={`/projects/qa/${Number(id)+1}`} className={ styles.btn }>
                            View Next Project<Image src={ arrowRight } alt="Right Arrow" fluid className={ styles.icons } /> 
                            </Link> 
                        }
                    </Col>
                </Row>
            </Container>

            <Container>
                {/* Project Information */}
                <h3 className={ [styles.heading, "pb-4"].join(" ") }> {project.overview} </h3>

                <h5 className={ styles.subheading }>Description</h5>
                <p className={ styles.info }> {project.description} </p>

                <h5 className={ styles.subheading }>Scope</h5>
                <p className={ styles.info }> {project.scope} </p>

                <h5 className={ styles.subheading }>Technology Used</h5>
                <p className={ styles.info }> 
                    {/* list technology used in the project */
                        project.technologies.map((tech) => (
                            <li>{ tech }</li>
                        ))
                    }
                </p>

                <h5 className={ styles.subheading }>Approach</h5>
                <p className={ styles.info }>{ project.approach }</p>

                <h5 className={ styles.subheading }>Challenges & Solutions</h5>
                <p className={ styles.info }> 
                    {/* list challenges faced in the project */
                        project["challenges-solutions"].map((challenge) => (
                            <li>{ challenge }</li>
                        ))
                    }
                </p>


                <h5 className={ styles.subheading }>Results</h5>
                <p className={ styles.info }> {project.results} </p>

                <h5 className={ styles.subheading }>Future Enhancements</h5>
                <p className={ styles.info }> 
                    {/* list enhancements that can be made to the project */
                        project["future-enhancements"].map((enhancement) => (
                            <li>{ enhancement }</li>
                        ))
                    }
                </p>

            </Container>
            
            <Container className="pt-4 px-0">
                <Link role="button" to={"/projects"} className={ styles.backBtn }>View all projects</Link>
            </Container>
        </Container>
    )
}

export default QAProjectDetailsComponent;