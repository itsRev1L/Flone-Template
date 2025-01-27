import React from "react";
import { Container, Row, Col } from "reactstrap";
const Pros = () => {
  return (
    <Container className="pt-5 ">
      <Row className="d-flex  justify-content-center">
        <Col xs="12" md="4" className="text-center">
          <h5 className="fs-5">Free Shipping</h5>
          <p>Lorem ipsum dolor sit amet consectetu adipisicing elit sed</p>
        </Col>
        <Col xs="12" md="4" className="text-center">
          <h5 className="fs-5">Support 24/7</h5>
          <p>Lorem ipsum dolor sit amet consectetu adipisicing elit sed</p>
        </Col>
        <Col xs="12" md="4" className="text-center">
          <h5 className="fs-5">Money Return</h5>
          <p>Lorem ipsum dolor sit amet consectetu adipisicing elit sed</p>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex  justify-content-center">
          <h2 className="pt-5 pb-5">New Arrival Soon...</h2>
        </Col>
      </Row>
    </Container>
  );
};

export default Pros;
