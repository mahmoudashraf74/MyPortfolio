import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Heading.css";

const Heading = (props) => {
    return (
        <Container>
            <Row sm>
                <Col sm>
                    <div className=" heading " data-aos="fade-right">
                        <h2>{props.heading}</h2>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};
export default Heading;
