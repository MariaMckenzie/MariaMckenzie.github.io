import React from "react";
import { Link } from "react-router-dom";
import { Card, Col, Container, Image, Row } from "react-bootstrap";
import data from "../../assets/data/ui-projects.data.json";
import styles from "./portfolio.module.css";

function PortfolioComponent () {
    return (
        <Container className={ [styles.container2, "m-0"].join(" ") }>
            {/* heading */}
            <h3 className={ styles.heading }>
                Projects
            </h3>

            {/* top 3 projects */}
            <Container className="m-o">
                <Row className="row-cols-auto text-start">
                {/* add cards from json file */
                    Array.from({ length: 3 }).map((_, id) => (
                        <Container className={ [styles.container, "p-5 mb-5" ].join(" ") }>
                            <Row>
                                <Col lg={4}>
                                    <Image src={ require(`../../assets/images/projects/${data[id].cover[0]}`) } alt="Portfolio Image" fluid className={ styles.img }/>
                                </Col>
                                <Col lg={8}>
                                    <h5 className={ styles.title }>{ data[id].title }</h5>
                                    <p className="pb-3">{ data[id].description }</p>
                                    <Link role="button" to={`/projects/uiux/${id+1}`} className={ styles.btn }>
                                        View Details
                                    </Link>
                                </Col>
                            </Row>
                        </Container>
                    ))}
                </Row>
            </Container>

            {/* view all projects button */}
            <Container className="d-flex justify-content-center">
                    <Link to="/portfolio" className={ styles.btn2 }>View More</Link>
            </Container>
        </Container>
    )
}

export default PortfolioComponent;