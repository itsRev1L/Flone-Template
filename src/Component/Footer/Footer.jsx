import React from "react";
import { Container, Row, Col } from "reactstrap";
const Footer = () => {
  return (
    <>
      <Container
        fluid
        className="d-flex justify-content-center align-items-center "
        style={{ height: "300px", backgroundColor: "#f6f6f8" }}
      >
        <Col md="3" className="d-flex justify-content-center ">
          <img src="/img/logo.png" alt="" />
        </Col>
        <Col md="2" className="">
          <Row>
            <a href="">
              <p> About Us</p>
            </a>
          </Row>
          <Row>
            <a href="">
              <p> Store Location</p>
            </a>
          </Row>
          <Row>
            <a href="">
              <p>Conntact</p>
            </a>
          </Row>
          <Row>
            <a href="">
              <p>Order Tracing</p>
            </a>
          </Row>
        </Col>

        <Col md="2" className="">
          <Row>
            <a href="">
              <p>About Us</p>
            </a>
          </Row>
          <Row>
            <a href="">
              <p>Store Location</p>
            </a>
          </Row>
          <Row>
            <a href="">
              <p>Conntact</p>
            </a>
          </Row>
          <Row>
            <a href="">
              <p>Order Tracing</p>
            </a>
          </Row>
        </Col>
        <Col md="2" className="">
          <Row>
            <a href="">
              <p>About Us</p>
            </a>
          </Row>
          <Row>
            <a href="">
              <p>Store Location</p>
            </a>
          </Row>
          <Row>
            <a href="">
              <p>Conntact</p>
            </a>
          </Row>
          <Row>
            <a href="">
              <p>Order Tracing</p>
            </a>
          </Row>
        </Col>
        <Col md="3" className="">
          <Row>
            <h3>SUBSCRIBE</h3>
            <p>Get E-mail updates about our latest shop and special offers.</p>
          </Row>
        </Col>
      </Container>
    </>
  );
};

export default Footer;
