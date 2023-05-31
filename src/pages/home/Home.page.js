import React from "react";
import { Container, Row } from "react-bootstrap";
import NavComponent from "../../components/nav/nav.component";
import IntroComponent from "../../components/intro/intro.component";
import WhatIDoComponent from "../../components/what-i-do/whatIDo.component";
import FooterComponent from "../../components/footer/footer.component";
import styles from "./Home.module.css";

function HomePage () {
	return (
		<Container className="m-0 p-4">
			<Container className={ styles.container }>
                {/* navigation bar */}
				<Row className="py-2">
					<NavComponent />
				</Row>
                
                {/* introduction section */}
				<Row className="pb-4">
					<IntroComponent />
				</Row>
			</Container>

            {/* what I do section */}
            <Container>
                <Row className="py-4">
					<WhatIDoComponent />
				</Row>
            </Container>

            {/* footer */}
            <Container className={ styles.container }>
                <Row className="mt-4">
					<FooterComponent />
				</Row>
            </Container>
		</Container>
	);
};

export default HomePage;
