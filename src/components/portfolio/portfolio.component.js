import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Image, Row } from "react-bootstrap";
import githubIcon from "../../assets/icons/github.svg";
import linkedinIcon from "../../assets/icons/linkedin.svg";
import emailIcon from "../../assets/icons/email.svg";
import fulllogo from "../../assets/images/full_logo.png";
import data from "../../assets/data/about.data.json";
import styles from "./portfolio.module.css";

function PortfolioComponent () {
    return (
        <Container>
            {/* heading */}
            <h3 className={ styles.heading }>
                Portfolio
            </h3>

            {/* top 3 projects */}

            {/* project 1 */}
            <Container className={ [styles.container, "p-5 mb-5" ].join(" ") }>
                <Row>
                    <Col className="col-4">
                        <Image src={ require(`../../assets/images/temp.png`) } alt="Portfolio Image" fluid className={ styles.img }/>
                    </Col>
                    <Col className="col-8">
                        <h5 className={ styles.title }>
                            Ppoject Title
                        </h5>

                        <p className="pb-3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet vestibulum purus, sed bibendum augue. 
                        In enim risus, viverra vitae lorem ac, fringilla gravida lorem. Nulla rutrum maximus lectus sit amet 
                        pellentesque. Vestibulum interdum condimentum enim eget condimentum. Integer a bibendum turpis. Integer 
                        suscipit elit fringilla dolor viverra, id lacinia purus fermentum. Fusce mollis nunc nec imperdiet condimentum
                        </p>
                        <Link role="button" to={`/projects/development/1}`} className={ styles.btn }>
                            View Details
                        </Link>
                    </Col>
                </Row>
            </Container>

            {/* project 2 */}
            <Container className={ [styles.container, "p-5 mb-5" ].join(" ") }>
                <Row>
                    <Col className="col-4">
                        <Image src={ require(`../../assets/images/temp.png`) } alt="Portfolio Image" fluid className={ styles.img }/>
                    </Col>
                    <Col className="col-8">
                        <h5 className={ styles.title }>
                            Ppoject Title
                        </h5>

                        <p className="pb-3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet vestibulum purus, sed bibendum augue. 
                        In enim risus, viverra vitae lorem ac, fringilla gravida lorem. Nulla rutrum maximus lectus sit amet 
                        pellentesque. Vestibulum interdum condimentum enim eget condimentum. Integer a bibendum turpis. Integer 
                        suscipit elit fringilla dolor viverra, id lacinia purus fermentum. Fusce mollis nunc nec imperdiet condimentum
                        </p>
                        <Link role="button" to={`/projects/development/1}`} className={ styles.btn }>
                            View Details
                        </Link>
                    </Col>
                </Row>
            </Container>

            {/* project 3 */}
            <Container className={ [styles.container, "p-5 mb-5" ].join(" ") }>
                <Row>
                    <Col className="col-4">
                        <Image src={ require(`../../assets/images/temp.png`) } alt="Portfolio Image" fluid className={ styles.img }/>
                    </Col>
                    <Col className="col-8">
                        <h5 className={ styles.title }>
                            Ppoject Title
                        </h5>

                        <p className="pb-3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet vestibulum purus, sed bibendum augue. 
                        In enim risus, viverra vitae lorem ac, fringilla gravida lorem. Nulla rutrum maximus lectus sit amet 
                        pellentesque. Vestibulum interdum condimentum enim eget condimentum. Integer a bibendum turpis. Integer 
                        suscipit elit fringilla dolor viverra, id lacinia purus fermentum. Fusce mollis nunc nec imperdiet condimentum
                        </p>
                        <Link role="button" to={`/projects/development/1}`} className={ styles.btn }>
                            View Details
                        </Link>
                    </Col>
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