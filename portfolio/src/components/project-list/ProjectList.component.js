import React from "react"; 
import { Card, Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import styles from "./ProjectList.module.css";

const projectListComponent = () => {
    return (
        <>
            <LinkContainer  to="/projects/uiux/1">
                <Card className={ [styles.card, "m-2 text-center"].join(" ") } >
                    <Card.Img src={ require(`../../assets/images/logo.png`) } alt="image" className= { [styles.img, "d-flex flex-row"].join(" ") } />
                    <Card.Body>
                        <Card.Title className={styles.heading} >Name</Card.Title>
                        <Card.Text>
                            $100.00
                        </Card.Text>
                    </Card.Body>
                </Card>
            </LinkContainer>
        </>
    )
}

export default projectListComponent;