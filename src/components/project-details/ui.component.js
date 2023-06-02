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
        <Container className="m-0 p-3">
            <Container>
                <Row>
                    <Col className="text-start py-5">
                        { id === "1" ? true : <Link role="button" to={`/projects/uiux/${Number(id)-1}`} className={ styles.btn }><Image src={ arrowLeft } alt="Left Arrow" fluid className={ styles.icons } /> View Previous Project
                        </Link> }
                    </Col>
                    <Col className="text-end py-5">
                        { id === "3" ? true : <Link role="button" to={`/projects/uiux/${Number(id)+1}`} className={ styles.btn }>View Next Project
                        <Image src={ arrowRight } alt="Right Arrow" fluid className={ styles.icons } />
                        </Link> }
                    </Col>
                </Row>        
            </Container>

            {/* Project Information */}
            <h3> { project.title } </h3>
            <h6> { project.description } </h6>
        </Container>
    )
}

export default UIProjectDetailsComponent;