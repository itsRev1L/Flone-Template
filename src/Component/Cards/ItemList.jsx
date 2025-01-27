import React from "react";
import {
  Col,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
} from "react-bootstrap";

/* eslint-disable react/prop-types */

const ItemList = ({ data }) => {
  const duplicatedItems = data.map((item) => (
    <Col sm={12} md={6} lg={3} key={item.id}>
      <Card style={{ width: "18rem" }}>
        <img alt={item.name} src={item.img} />
        <CardBody>
          <CardTitle tag="h5">{item.name}</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            {item.price}
          </CardSubtitle>
          <CardText>Some quick example text for {item.name}</CardText>
        </CardBody>
      </Card>
    </Col>
  ));

  return <>{duplicatedItems}</>;
};

export default ItemList;
