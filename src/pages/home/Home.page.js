import React from "react";
import { Container, Row } from "react-bootstrap";
import NavComponent from "../../components/nav/nav.component";
import IntroComponent from "../../components/intro/intro.component";
import WhatIDoComponent from "../../components/what-i-do/whatIDo.component";
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
				<Row className="py-2">
					<IntroComponent />
				</Row>
			</Container>

            {/* what I do section */}
            <Container className={ styles.container2 }>
                <Row>
					<WhatIDoComponent />
				</Row>
            </Container>
		</Container>
	);
};

export default HomePage;
