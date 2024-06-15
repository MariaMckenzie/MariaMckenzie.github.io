import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import  arrowLeft from "../../assets/icons/arrow_left.svg";
import  arrowRight from "../../assets/icons/arrow_right.svg";
import data from "../../assets/data/dev-projects.data.json";
import { useParams } from 'react-router-dom';
import styles from "./projectDetails.module.css";

function DevProjectDetailsComponent ( ) {
    const { id } = useParams();
    const project = data[id-1];

    return (
        <Container className="m-0 p-0">
            <Container>
                <Row className="align-items-center">
                    <Col className="text-start py-5 px-0 m-0">
                        { id === "1" ? true : 
                            <Link role="button" to={`/projects/development/${Number(id)-1}`} className={ styles.btn }>
                                <Image src={ arrowLeft } alt="Left Arrow" fluid className={ styles.icons } /> View Previous Project
                            </Link> 
                        }
                    </Col>
                    <Col className="text-end py-5 px-0 m-0">
                        { id === "3" ? true : <Link role="button" to={`/projects/development/${Number(id)+1}`} className={ styles.btn }>View Next Project
                        <Image src={ arrowRight } alt="Right Arrow" fluid className={ styles.icons } />
                        </Link> }
                    </Col>
                </Row>        
            </Container>

            <Container>
                {/* Project Information */}
                <h3 className={ [styles.heading, "pb-4"].join(" ") }> {project.title} </h3>

                <h5 className={ styles.subheading }>Description</h5>
                <p className={ styles.info }> {project.description} </p>

                <h5 className={ styles.subheading }>Cover</h5>
                <p className={ styles.info }> {project.cover} </p>

                <h5 className={ styles.subheading }>Features</h5>
                <p className={ styles.info }> 
                    {/* list user challenges of the project */
                        project.features.map((feature) => (
                            <li>{ feature }</li>
                        ))
                    }
                </p>

                <h5 className={ styles.subheading }>Technology Used</h5>
                <p className={ styles.info }> 
                    {/* list technology used in the project */
                        project["tech-used"].map((tech) => (
                            <li>{ tech }</li>
                        ))
                    }
                </p>

                <h5 className={ styles.subheading }>Challenges & Solutions</h5>
                <p className={ styles.info }> 
                    {/* list challenges faced in the project */
                        project["challenges-solutions"].map((challenge) => (
                            <li>{ challenge }</li>
                        ))
                    }
                </p>

                <h5 className={ styles.subheading }>Screens</h5>
                <p className={ styles.info }> {project.screens} </p>
            </Container>
            
        </Container>
    )
}

export default DevProjectDetailsComponent;