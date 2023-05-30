import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import data from "../../assets/data/about.data.json";
import qa from "../../assets/data/qa-projects.data.json";
import ui from "../../assets/data/ui-projects.data.json";
import dev from "../../assets/data/dev-projects.data.json";
import NavComponent from "../../components/nav/nav.component";
import FooterComponent from "../../components/footer/footer.component";
import styles from "./Portfolio.module.css";

function PortfolioPage () {
    return (
        <Container className="p-4">
            {/* navigation bar */}
            <Container>
                <Row className="py-2">
                    <NavComponent />
                </Row>
            </Container>

            {/* projects section */}
            <Row className="py-2">
                <h4 className={ styles.heading }>Portfolio</h4>

                {/* ui ux projects */}
                <Container>
                    {/* heading */}
                    <h5>{ data.projects[0] }</h5>

                    {/* add project info from json file */
                        Array.from({ length: ui.length }).map((_, id) => (
                            <Row className="pt-3">
                                <Container>
                                    <Card className={ styles.card }>
                                        <Card.Title className={ styles.title }> { ui[id].title } </Card.Title>
                                        {/* <Card.Text className={ styles.text }> { data.role[id].info } </Card.Text> */}
                                        <Button className={ styles.btn }>View Details</Button>
                                    </Card>
                                </Container>
                            </Row>
                        ))
                    }
                </Container>
                
                {/* frontend dev projects */}
                <Container>
                    {/* heading */}
                    <h5>{ data.projects[1] }</h5>

                    {/* add project info from json file */
                        Array.from({ length: dev.length }).map((_, id) => (
                            <Row className="pt-3">
                                <Container>
                                    <Card className={ styles.card }>
                                        <Card.Title className={ styles.title }> { dev[id].title } </Card.Title>
                                        {/* <Card.Text className={ styles.text }> { data.role[id].info } </Card.Text> */}
                                        <Button className={ styles.btn }>View Details</Button>
                                    </Card>
                                </Container>
                            </Row>
                        ))
                    }
                </Container>

                {/* automation projects */}
                <Container>
                    {/* heading */}
                    <h5>{ data.projects[2] }</h5>

                    {/* add project info from json file */
                        Array.from({ length: qa.length }).map((_, id) => (
                            <Row className="pt-3">
                                <Container>
                                    <Card className={ styles.card }>
                                        <Card.Title className={ styles.title }> { qa[id].overview } </Card.Title>
                                        {/* <Card.Text className={ styles.text }> { data.role[id].info } </Card.Text> */}
                                        <Button className={ styles.btn }>View Details</Button>
                                    </Card>
                                </Container>
                            </Row>
                        ))
                    }
                </Container>
            </Row>

            {/* footer */}
            <Container className={ styles.container }>
                <Row className="mt-4">
					<FooterComponent />
				</Row>
            </Container>
		</Container>
    )
}

export default PortfolioPage; 