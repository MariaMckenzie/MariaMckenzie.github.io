import React from "react";
import { Button, Container, Image } from "react-bootstrap";
import image from "../../assets/images/404.svg"
import styles from "./Error.module.css";

const errorPage = () => {
    return (
        <>
            <Container className={styles.container}>
                <Container className="text-center">
                    <Image src={image} className={styles.image} alt="logo" />
                    <h4 className={styles.text}>Page Not Found!</h4>
                    <Button href="/" className={styles.btn}>Go to Home Page</Button>
                </Container>
            </Container>
        </>
    )
}

export default errorPage; 