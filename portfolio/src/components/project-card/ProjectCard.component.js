import React from "react"; 
import { Button, Card } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import temp from "../../assets/images/temp.png";
import styles from "./ProjectCard.module.css";

const projectListComponent = (image) => {
    return (
        <>
            <LinkContainer  to="/projects/uiux/1">
                <Card className={ [styles.card, "m-2 text-center"].join(" ") } >
                    <Card.Img src={ temp } alt="image" className= { [styles.img, "d-flex flex-row"].join(" ") } />
                    <Card.Body>
                        <Card.Title className={styles.heading}>Name</Card.Title>
                        <Card.Text>
                            Lorem ipsum dolor sit amet. Hic fugiat temporibus sed omnis rerum sed quae saepe et itaque nisi ut delectus provident. 
                            Sed accusantium amet vel nobis minima aut repellendus architecto in nobis animi. 
                        </Card.Text>
                        <Button className={styles.btn}>View</Button>
                    </Card.Body>
                </Card>
            </LinkContainer>
        </>
    )
}

export default projectListComponent;