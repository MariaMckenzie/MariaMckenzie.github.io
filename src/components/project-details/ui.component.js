import React from "react";
import { Card, Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import  arrowLeft from "../../assets/icons/arrow_left.svg";
import  arrowRight from "../../assets/icons/arrow_right.svg";
import  tick from "../../assets/icons/tick-circle.svg";
import data from "../../assets/data/ui-projects.data.json";
import { useParams } from 'react-router-dom';
import styles from "./projectDetails.module.css";

function UIProjectDetailsComponent ( ) {
    const { id } = useParams();
    const project = data[id-1];
    const feature_len = project.features.length;
    const b_challenge_len = project["business-challenges"].length;
    const u_challenge_len = project["user-challenges"].length;
    const users_len = project["product-users"].length;

    return (
        <Container className="m-0 px-5">
            {/* navigation between projects */}
            <Container>
                <Row className="align-items-center">
                    <Col className="text-start py-5 px-0 m-0">
                        { id === "1" ? true : 
                            <Link role="button" to={`/projects/uiux/${Number(id)-1}`} className={ styles.btn }>
                                <Image src={ arrowLeft } alt="Left Arrow" fluid className={ styles.icons } /> Previous Project
                            </Link> 
                        }
                    </Col>
                    <Col className="text-end py-5 px-0 m-0">
                        { id === "3" ? true : <Link role="button" to={`/projects/uiux/${Number(id)+1}`} className={ styles.btn }>Next Project
                        <Image src={ arrowRight } alt="Right Arrow" fluid className={ styles.icons } />
                        </Link> }
                    </Col>
                </Row>        
            </Container>

            {/* Project Information */}

            {/* problem statement */}
            <Container className={ "m-0 mb-5 p-5" }>
                <h1 className={ [styles.heading, "pb-4"].join(" ") }> {project.title} </h1>

                <p className={ [styles.info, "mb-5"].join(" ") }> {project.description} </p>

                <Image src={ require(`../../assets/images/projects/${project.cover[1]}`) } alt="image" fluid className={ styles.img } />
                

                <h4 className={ [styles.subheading, "mb-3 mt-5"].join(" ") }>Problem Statement</h4>
                <p className={ [styles.info, "mb-5"].join(" ") }> {project["problem-statement"]} </p>
            </Container>

            {/* goals */}
            <Container className="mb-3">
                <h4 className={ styles.subheading }>Goals</h4>
                <Row className="m-0 p-0 auto-row-cols align-items-center">   
                    <Col>
                        {/* list goals of the project */
                        project.goals.map((goal) => (
                            <Container className="d-flex my-3">
                                <Image src={ tick } alt="Tick" className={ styles.tickIcon } fluid />
                                <p>{goal}</p>
                            </Container>
                        ))}
                    </Col>
                    <Col>
                        <Image src={ require(`../../assets/images/goal.png`) } alt="image" fluid/>
                    </Col>
                </Row>
            </Container>

            {/* business challenges */}
            <Container className="my-5">
                <h4 className={ styles.subheading }>Business Challenges</h4>
                    {/* add cards from json file */
                    Array.from({ length: b_challenge_len }).map((_, id) => (
                        <Row key={`challenge-${id}`}>
                            <Card className={ [styles.card, "p-3"].join(" ")}>
                                <Card.Text className={ styles.cardText }> {project["business-challenges"][id]} </Card.Text>
                            </Card>
                        </Row>
                    ))}
            </Container>

            {/* user challenges */}
            <Container className="my-5">
                <h4 className={ styles.subheading }>User Challenges</h4>
                {/* add cards from json file */
                Array.from({ length: u_challenge_len }).map((_, id) => (
                    <Row key={`challenge-${id}`}>
                        <Card className={ [styles.card, "p-3"].join(" ")}>
                            <Card.Text className={ styles.cardText }> {project["user-challenges"][id]} </Card.Text>
                        </Card>
                    </Row>
                ))}
            </Container>

            {/* product users */}
            <Container className="m-0 my-4 p-5">
                <h4 className={ [styles.subheading, "mb-3"].join(" ") }>Product Users</h4>
                <Row className="align-items-center">
                    <Col>
                        <Image src={ require(`../../assets/images/users.png`) } alt="image" fluid/>
                    </Col>
                    <Col>
                    {/* list users of the project */
                            Array.from({ length: users_len }).map((_, id) => (
                                <Row key={`user-${id}`}>
                                    <Container className="my-2 d-flex">
                                        <Container className={ styles.cardDecor }></Container>
                                        <p>{project["product-users"][id]}</p>
                                    </Container>
                                </Row>
                            ))}
                        </Col>
                    </Row>
            </Container>
                
            {/* research */}
            <Container className="text-center">
                <h4 className={ [styles.subheading, "mb-3"].join(" ") }>Research</h4>
                <p> {project.research} </p>
                
                {/* competitor analysis */}
                <h6 className={ styles.subheading2 }>Competitor Analysis</h6>
                <p> {project["competitor-analysis"]} </p>
            </Container>

            {/* features */}
            <Container className="my-5">
                <h4 className={ styles.subheading }>Features</h4>
                <Row className="m-0 p-0 auto-row-cols align-items-center">   
                    <Col>
                        {/* list features of the project */
                        project.features.map((feature) => (
                            <Container className="d-flex my-3">
                                <Image src={ tick } alt="Tick" className={ styles.tickIcon } fluid />
                                <p>{feature}</p>
                            </Container>
                        ))}
                    </Col>
                    <Col>
                        <Image src={ require(`../../assets/images/features.png`) } alt="image" fluid/>
                    </Col>
                </Row>
            </Container>


            {/* user persona */}
            <Container>
                <h4 className={ styles.subheading }>User Persona</h4>
                <Row className={ [styles.container2, "m-0 mt-4 p-5"].join(" ") }>
                    {/* user image */}
                    <Col lg={4}>
                        <Image src={ require(`../../assets/images/projects/${project["user-persona"].img}`) } alt="profile image" fluid className={ styles.userImg } />
                    </Col>

                    {/* user information */}
                    <Col lg={8}>
                        <Row>
                            <Col lg={3}> <p className={ styles.heading3 }>Name:</p> </Col>
                            <Col> <p className={ styles.info }> { project["user-persona"].name } </p> </Col>
                        </Row>

                        <Row>
                            <Col lg={3}> <p className={ styles.heading3 }>Age:</p> </Col>
                            <Col> <p className={ styles.info }> { project["user-persona"].age } </p> </Col>
                        </Row>

                        <Row>
                            <Col lg={3}> <p className={ styles.heading3 }>Occupation:</p> </Col>
                            <Col> <p className={ styles.info }> { project["user-persona"].occupation } </p> </Col>
                        </Row>

                        <Row>
                            <Col lg={3}> <p className={ styles.heading3 }>Goals:</p> </Col>
                            <Col> <p className={ styles.info }> { project["user-persona"].goals } </p> </Col>
                        </Row>

                        <Row>
                            <Col lg={3}> <p className={ styles.heading3 }>Pain Points:</p> </Col>
                            <Col> <p className={ styles.info }> { project["user-persona"]["pain-points"] } </p> </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
            
            {/* container for images */}
            <Container className="mt-5">
                {/* website flow */}
                <Container className="m-0 mb-5 p-5">
                    <h3 className={ styles.subheading }>User Flow</h3>
                    <Image src={ require(`../../assets/images/projects/${project["web-flow"]}`) } alt="task flow" fluid className={ styles.img } />
                </Container>

                {/* major screens */}
                <Container className="m-0 p-0 pb-5">
                    <h3 className={ styles.subheading }>UI Designs</h3>
                    <Image src={ require(`../../assets/images/projects/${project["major-screens"]}`) } alt="designs" fluid className={ styles.img } />
                </Container>
            </Container>
            
        </Container>
    )
}

export default UIProjectDetailsComponent;