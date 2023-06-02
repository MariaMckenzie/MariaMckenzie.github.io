import React from "react";
import { Button, Container, Image, Row } from "react-bootstrap";
import FooterComponent from "../../components/footer/footer.component";
import image from "../../assets/images/404.svg"
import styles from "./Error.module.css";

const errorPage = () => {
    return (
        <Container className="py-5">
            <Container className={ styles.container }>
                <Container className="text-center">
                    <Image src={ image } className={ styles.image } alt="logo" />
                    <h4 className={ styles.text }>Page Not Found!</h4>
                    <Button href="/" className={ styles.btn }>Go to Home Page</Button>
                </Container>
            </Container>
            
            {/* footer */}
            <Container className={ styles.container }>
                <Row className="mt-4">
					<FooterComponent />
				</Row>
            </Container>
        </Container>
    )
}

export default errorPage; 